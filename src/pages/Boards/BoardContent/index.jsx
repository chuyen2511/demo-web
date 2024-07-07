import Box from '@mui/material/Box'

function Boardcontent() {
  return (
    <Box sx={{
      bgcolor: ( theme ) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width:'100%',
      height:(theme)=>`calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boarBarHeight})`,
      display:'flex',
      
    }}>
      <Box sx={{
        minWidth: '300px',
        maxWidth: '300px',
        bgcolor: ( theme ) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: 2,
        borderRadius:'6px'
      }}>
        <Box sx={{ }}>
          header
        </Box>
        <Box sx={{ }}>
          list card
        </Box>
        <Box sx={{ }}>
          foooter
        </Box>
      </Box>
    </Box>
  )
}

export default Boardcontent
