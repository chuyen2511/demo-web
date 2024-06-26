import Box from '@mui/material/Box'

function Boardcontent() {
  return (
    <Box sx={{
      backgroundColor:'primary.main',
      width:'100%',
      height:(theme)=>`calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boarBarHeight})`,
      display:'flex',
      alignItems:'center'
    }}>
      box content
    </Box>
  )
}

export default Boardcontent