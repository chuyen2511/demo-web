import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function Boardcontent({ board }) {
  //yêu cầu chuột đi chuyển 10px để kích hoạt event
  const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const mouseSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(PointerSensor, { activationConstraint: { delay: 50, tolerance: 5 } })

  // const Mysensors = useSensors(pointerSensor)
  const Mysensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumn, setOrderedColumn] = useState([])

  useEffect(()=> {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    console.log('handleDragEnd', event)
    const { active, over } = event
    // nếu kéo thả ra chỗ khác thì return luôn
    if (!over) return

    // nếu vị trí kéo thả mới đến column
    if (active.id !== over.id){

      const oldIndex = orderedColumn.findIndex((c) => c._id === active.id )
      const newIndex = orderedColumn.findIndex((c) => c._id === over.id )

      const dndOrderedColumn = arrayMove(orderedColumn, oldIndex, newIndex)
      // sau dung api
      // const dndOrderedColumnIds = dndOrderedColumns.map(c =>c._id)

    //cập nhật vị trí mới 
      setOrderedColumn(dndOrderedColumn)

    }
  }

  return (
    <DndContext onDragEnd={ handleDragEnd } sensors={ Mysensors }>
      <Box sx={{
        bgcolor: ( theme ) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width:'100%',
        height:( theme ) => theme.trello.boardContentHeight,
        p:'10px 0'
      }}>
        <ListColumns columns = {orderedColumn}/>
      </Box>
    </DndContext>
  )
}

export default Boardcontent
