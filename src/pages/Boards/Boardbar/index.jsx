import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor:'primary.dark',
      width:'100%',
      height:(theme)=>theme.trello.boarBarHeight,
      display:'flex',
      alignItems:'center'
    }}>
      boarbar
    </Box>
  )
}

export default BoardBar