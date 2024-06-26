import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Container from '@mui/material/Container'


function SelectMode() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectMode = event.target.value
    setMode(selectMode)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
      
        <MenuItem value='light'>
          <Box sx = {{display:'flex', alignItems:'center', gap:"8px"}}>
            <LightModeIcon fontSize='small'/> Light
          </Box>
        </MenuItem>  
        <MenuItem value='dark'>
          <Box sx = {{display:'flex', alignItems:'center', gap:"8px"}}>
            <NightlightIcon fontSize='small'/>Dark
          </Box>
        </MenuItem>

        <MenuItem value='system'>
          <Box sx = {{display:'flex', alignItems:'center', gap:"8px"}}>
            <SettingsBrightnessIcon fontSize='small'/>System
          </Box>
        </MenuItem>

      </Select>
    </FormControl>
  )
}
function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{height:'100vh'}}>
      <Box sx={{
        backgroundColor:'primary.light',
        width:'100%',
        height:(theme)=>theme.trello.appBarHeight,
        display:'flex',
        alignItems:'center'
      }}>
        <SelectMode/>
      </Box>
      <Box sx={{
        backgroundColor:'primary.dark',
        width:'100%',
        height:(theme)=>theme.trello.boarBarHeight,
        display:'flex',
        alignItems:'center'
      }}>
        boarbar
      </Box>
      <Box sx={{
        backgroundColor:'primary.main',
        width:'100%',
        height:(theme)=>`calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boarBarHeight})`,
        display:'flex',
        alignItems:'center'
      }}>
        box content
      </Box>
    </Container>
  )
}

export default App
