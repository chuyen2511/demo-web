import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import { Button } from '@mui/material'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sorts'

function Column({ column }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  const orderedCard = mapOrder(column?.cards,column.cardOrderIds, '_id')
  return (
    <Box sx={{
      minWidth: '300px',
      maxWidth: '300px',
      bgcolor: ( theme ) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
      ml: 2,
      borderRadius:'6px',
      height:'fit-content',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
    }}>
      <Box sx={{
        height:(theme) => theme.trello.columnHeaderHeight,
        p:2,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Typography
          variant="h6"
          sx={{
            cursor:'pointer',
            fontWeight:'bold',
            fontSize:'1rem'
          }}>
          {column.title}
        </Typography>
        <Box>
          <Tooltip title="More options">
            <ExpandMoreIcon
              sx={{ color:'text.primary', cursor:'pointer' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-cloumn' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-cloumn"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCopyIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentPasteIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>

            <Divider />
            <MenuItem>
              <ListItemIcon> <DeleteForeverIcon fontSize="small" /> </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon> <Cloud fontSize="small" /> </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>

          </Menu>
        </Box>
      </Box>

      <ListCards cards = {orderedCard}/>

      <Box sx={{
        height:( theme ) => theme.trello.columnFooterHeight,
        p:2,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Button startIcon={<AddCardIcon/>}>Add new card</Button>
        <Tooltip title="Drap to move">
          <DragHandleIcon sx={{ cursor:'pointer' }}/>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column