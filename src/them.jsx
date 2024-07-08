import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const theme = extendTheme({
  trello:{
    appBarHeight: APP_BAR_HEIGHT,
    boarBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight:COLUMN_HEADER_HEIGHT,
    columnFooterHeight:COLUMN_HEADER_HEIGHT
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
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
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
