import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'


const theme = extendTheme({
  trello:{
    appBarHeight:'58px',
    boarBarHeight:'60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary:teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
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
            backgroundColor:'#bdc3c7',
            borderRadius: '6px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor:'#00b894',
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform:'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          //'.MuiOutlinedInput-notchedOutline' là css cho border
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light
          },
          '&:hover' : {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main
            }
          }
        })
      }
    }
  }
})

export default theme
