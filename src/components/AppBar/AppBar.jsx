import Box from '@mui/material/Box'
import SelectMode from '~/components/SelectMode/SelectMode.jsx'
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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles.jsx'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
function AppBar() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <Box sx={{
      width:'100%',
      height:( theme ) => theme.trello.appBarHeight,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      px: 2,
      gap: 2,
      overflowX:'auto',
      bgcolor: ( theme ) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <AppsIcon sx={{ color:'white' }}/>
        <Box sx={{ display:'flex', alignItems:'center', gap:0.5 }}>
          <SvgIcon fontSize="small" sx={{ color:'white' }} component={TrelloIcon} inheritViewBox />
          <Typography variant='span' sx={{ fontSize:'1.2rem', fontWeight:'bold', color:'white' }}>Trello</Typography>
        </Box>
        <Box sx={{ display:{ xs: 'none', md: 'flex', gap: 1 } }}>
          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button
            variant="outlined"
            startIcon={<LibraryAddIcon/>}
            sx={{
              color:'white',
              border:'none',
              '&:hover':{
                border:'none'
              }
            }}
          >
          Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search"
          type="text"
          size="small"
          value={searchValue}
          onChange={(e)=> setSearchValue (e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{ color:'white' }}
                />
              </InputAdornment>
            ),
            endAdornment:(
              <CloseIcon
                fontSize="small"
                sx={{
                  color: searchValue ? 'white' : 'transparent',
                  cursor:'pointer'
                }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth:'120px',
            maxWidth:'170px',
            '& label':{ color:'white' },
            '& input':{ color:'white' },
            '& label.Mui-focused':{ color:'white' },
            '& .MuiOutlinedInput-root':{
              '& fieldset': { borderColor:'white' },
              '&:hover fieldset': { borderColor:'white' },
              '&.Mui-focused fieldset': { borderColor:'white' }
            }
          }}/>

        <SelectMode />

        <Tooltip title="Notification">
          <Badge color="error" variant="dot" sx={{cursor:'pointer'}}>
            <NotificationsNoneIcon sx={{ color:'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Notification">
          <HelpOutlineIcon sx={{ cursor:'pointer', color:'white' }}/>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}

export default AppBar
