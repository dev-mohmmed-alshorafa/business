import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light:{main: '#ffffff'},
      main: '#3351A6',
      dark: '#4676ff',
      contrastText: '#fff',
    },
   
    secondary: {
      light: '#ffff',
      main: '#0000',
      dark: '#9e0022',
      contrastText: '#ffff',
    },  
    info: {
      light: '#6b7280',
      main: '#ffff',
      dark: '#9e0022',
      contrastText: '#fff',
    },
  },
})
export default theme
