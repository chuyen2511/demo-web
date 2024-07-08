import Box from '@mui/material/Box'
import Column from './Column/Column'
import { Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {



  return (
    <SortableContext items={ columns?.map(c => c._id) } strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor:'inherit',
        width:'100%',
        height:'100%',
        display:'flex',
        overflowX:'auto',
        overflowY:'hidden',
        '&::-webkit-scrollbar-track':{ m: 1 }
      }}>

        {columns.map( column => <Column key={column._id} column={column}/>)}

        {/* theem column */}
        <Box sx={{
          minWidth:'200px',
          maxWidth:'200px',
          mx:2,
          borderRadius:'6px',
          height:'fit-content',
          bgcolor:'#ffffff3d'
        }}>
          <Button
            sx={{
              color:'white',
              width:'100%',
              justifyContent:'flex-start',
              pl:2.5,
              py:1
            }}
            startIcon={<AddCircleOutlineIcon/>}
          > Add new column </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns