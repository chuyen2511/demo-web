import Box from '@mui/material/Box'
import SelectMode from '~/components/SelectMode'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces.jsx'
import Recent from './Menus/Recent.jsx'
import Starred from './Menus/Starred.jsx'
import Templates from './Menus/Templates.jsx'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles.jsx'

function AppBar() {
  return (
    <Box px={2} sx={{
      width:'100%',
      height:(theme)=>theme.trello.appBarHeight,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between'
    }}>
      <Box sx={{display:'flex',alignItems:'center',gap:2}}>
        <AppsIcon sx={{ color:'primary.main'}}/>
        <Box sx={{display:'flex',alignItems:'center',gap:0.5}}>
          <SvgIcon sx={{ color:'primary.main'}} component={TrelloIcon} inheritViewBox />
          <Typography variant='span' sx={{fontSize:'1.2rem',fontWeight:'bold',color:'primary.main'}}>Trello</Typography>
        </Box>
        <Workspaces/>
        <Recent/>
        <Starred/>
        <Templates/>
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{display:'flex',alignItems:'center',gap:0.5}}>
        <TextField id="outlined-search" label="Search" type="search" size="small" />

        <SelectMode/>

        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{cursor:'pointer'}}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Notification">
          <HelpOutlineIcon sx={{cursor:'pointer'}}/>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}

export default AppBar
