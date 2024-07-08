import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar/AppBar'
import BoardBar from './Boardbar/Boardbar'
import Boardcontent from './BoardContent/BoardContent'
import { mockData } from '~/Apis/mock-data'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height:'100vh' }}>
      <AppBar/>
      <BoardBar board={mockData?.board} />
      <Boardcontent board={mockData?.board} />
    </Container>
  )
}

export default Board
