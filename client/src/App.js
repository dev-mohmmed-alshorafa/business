import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './helpers/theme'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

function App() {

 
  return (
    <Box  className="App">
      <ThemeProvider theme={theme}>
      <Outlet />      
      </ThemeProvider>
    </Box>
  )
}

export default App
