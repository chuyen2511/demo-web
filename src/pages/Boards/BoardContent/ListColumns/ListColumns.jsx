import Box from '@mui/material/Box'
import Column from './Column/Column'
import { Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function ListColumns() {

  return (
    <Box sx={{
      bgcolor:'inherit',
      width:'100%',
      height:'100%',
      display:'flex',
      overflowX:'auto',
      overflowY:'hidden',
      '&::-webkit-scrollbar-track':{ m: 1 }
    }}>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
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
  )
}

export default ListColumns