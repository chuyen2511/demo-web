import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { cloneDeep } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function Boardcontent({ board }) {
  const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(PointerSensor, { activationConstraint: { delay: 150, tolerance: 5 } })

  const Mysensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumn, setOrderedColumn] = useState([])
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemIdType, setActiveDragItemIdType] = useState(null)
  const [activeDragItemIdData, setActiveDragItemIdData] = useState(null)

  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])


  const findColumnByCardId = (cardId) => {
    //đi vào column lấy mảng card thì kiểm tra xem có chứa cardid 
    return orderedColumn.find(column => column.cards.map(card => card._id)?.includes(cardId))
  }

  // handleDragStart là bắt hành dộng khi bắt đầu khóe phần tử
  const handleDragStart = (event) => {
    //setActiveDragItemId để lấy đc vị trí id người dùng kéo thả
    setActiveDragItemId(event?.active?.id)
    //setActiveDragItemIdType để kiểm tra xem nta đang kéo column hay cảd
    setActiveDragItemIdType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    //setActiveDragItemIdData cái này để lấy dữ liệu
    setActiveDragItemIdData(event?.active?.data?.current)
  }


  // handleDragOver là hàm bắt lấy hành động trong quá trình kéo thả column hoặc card
  const handleDragOver = ( event ) => {

    // trong quá trình kéo thả ta ko muốn nó động vào column
    if (activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return
    // nếu kéo card thì
    const { active, over } = event
    if ( !active || !over) return

    const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
    // over là cái card mình dang kéo
    const { id: overCardId } = over

    // tìm 2 cái column tương tác
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)
    if ( !activeColumn || !overColumn) return

    // trường hợp kéo sang column khác nhau thì sử lí logic
    if (activeColumn._id !== overColumn._id) {
      setOrderedColumn(prevColumns =>{
        //tìm vị trí của card trong column đc thả
        const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

        //đoạn code này để mình lấy đc new card index khó hiểu
        let newCardIndex
        const isBelowOverItem = active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height
        const modifier = isBelowOverItem ? 1 : 0
        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

        //clone lại mảng orderedcolumn cũ thành mới rồi cắp nhật lại mảng orderedcolumn mới 
        const nextColumns = cloneDeep(prevColumns)
        const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
        const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
        }

        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
        }

        return nextColumns
      })
    }
  }


  // handleDragEnd là bắt hành dộng khi kết thúc khóe phần tử == thả ra
  const handleDragEnd = (event) => {
    // console.log('handleDragEnd', event)
    if (activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      return
    }


    const { active, over } = event
    // nếu kéo thả ra chỗ khác thì return luôn
    if (!over) return
    // nếu vị trí kéo thả mới đến column
    if (active.id !== over.id) {
      const oldIndex = orderedColumn.findIndex((c) => c._id === active.id)
      const newIndex = orderedColumn.findIndex((c) => c._id === over.id)

      const dndOrderedColumn = arrayMove(orderedColumn, oldIndex, newIndex)

      // cập nhật vị trí mới
      setOrderedColumn(dndOrderedColumn)
    }

    // reset trạng thái kéo thả
    setActiveDragItemId(null)
    setActiveDragItemIdType(null)
    setActiveDragItemIdData(null)
  }


  const DropAnimation = { sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } } ) }

  // console.log('activeDragItemId:', activeDragItemId)
  // console.log('activeDragItemIdType:', activeDragItemIdType)
  // console.log('activeDragItemIdData:', activeDragItemIdData)

  return (
    <DndContext
      sensors={Mysensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumn} />
        <DragOverlay dropAnimation={DropAnimation}>
          {!activeDragItemIdType && null}
          {(activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemIdData} />}
          {(activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemIdData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default Boardcontent
