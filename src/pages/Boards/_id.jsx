import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'
import BoardBar from './Boardbar'
import Boardcontent from './BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{height:'100vh'}}>
      <AppBar/>
      <BoardBar/>
      <Boardcontent/>
    </Container>
  )
}

export default Board
