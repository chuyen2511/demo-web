import { experimental_extendTheme as extendTheme} from '@mui/material/styles'



const theme = extendTheme({
  trello:{
    appBarHeight:'58px',
    boarBarHeight:'60px'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides:{
        body:{
          '*::-webkit-scrollbar':{
            width: '6px',
            height:'6px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor:'#dcdde1',
            borderRadius: '6px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor:'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform:'none',
          borderWidth:'0.5px'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset':{ borderWidth: '0.5px !important ' },
          '&:hover fieldset':{ borderWidth: '1px !important ' },
          '&.Mui-focused fieldset':{ borderWidth: '1px !important ' }
        }
      }
    }
  }
})

export default theme
