import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

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
  
  const handleDragStart = (event) => {
    //setActiveDragItemId để lấy đc vị trí id người dùng kéo thả
    setActiveDragItemId(event?.active?.id)
    //setActiveDragItemIdType để kiểm tra xem nta đang kéo column hay cảd
    setActiveDragItemIdType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    //setActiveDragItemIdData cái này để lấy dữ liệu
    setActiveDragItemIdData(event?.active?.data?.current)
  }

  const handleDragEnd = (event) => {
    console.log('handleDragEnd', event)
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
    <DndContext onDragEnd={handleDragEnd} sensors={Mysensors} onDragStart={handleDragStart}>
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
