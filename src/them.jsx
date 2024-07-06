import { createTheme } from '@mui/material/styles'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
import { red, teal } from '@mui/material/colors'

const theme = extendTheme({
    trello:{
      appBarHeight:'58px',
      boarBarHeight:'60px'
    },
    colorSchemes: {
      light: {
        palette: {
          primary:teal,
        }
      },
      dark: {
        palette: {
          primary: {
            main: '#333'
          }
        }
      }
    }
  })

export default theme
