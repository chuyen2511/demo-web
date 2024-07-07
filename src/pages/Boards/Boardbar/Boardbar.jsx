import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

const MENU_STYLES = {
  color:'white',
  bgcolor:'transparent',
  border:'none',
  borderRadius:'4px',
  '.MuiSvgIcon-root': {
    color:'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
function BoardBar() {
  return (
    <Box sx={{
      width:'100%',
      height:( theme ) => theme.trello.boarBarHeight,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      px: 2,
      gap: 2,
      overflowX: 'auto',
      bgcolor: ( theme ) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="chuyen tran dev "
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Driver "
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automations "
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddAltIcon/>}
          sx={{
            color:'white',
            borderColor: 'white',
            '&:hover':{ borderColor: 'white' }
          }}
        >
        Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap:'10px',
            '& .MuiAvatar-root':{
              width:34,
              height:34,
              fontSize:16,
              border:'none',
              color:'white',
              cursor:'pointer',
              '&:first-of-type':{ bgcolor:'#a4b0be' }
            }
          }}
        >
          <Tooltip title="chuyentran">
            <Avatar alt="Remy Sharp" src='https://avatars.githubusercontent.com/u/111499392?v=4'/>
          </Tooltip>
          <Tooltip title="chuyentran">
            <Avatar alt="Remy Sharp" src='https://avatars.githubusercontent.com/u/6643122?s=48&v=4'/>
          </Tooltip>
          <Tooltip title="chuyentran">
            <Avatar alt="Remy Sharp" src='https://avatars.githubusercontent.com/u/52707818?s=48&v=4'/>
          </Tooltip>
          <Tooltip title="chuyentran">
            <Avatar alt="Remy Sharp" src='https://github.com/cat-milk.png?size=40'/>
          </Tooltip>
          <Tooltip title="chuyentran">
            <Avatar alt="Remy Sharp" src='https://github.com/railsgirls.png?size=40'/>
          </Tooltip>
          <Tooltip title="chuyentran">
            <Avatar alt="Remy Sharp" src='https://github.com/CoXier.png?size=40'/>
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
