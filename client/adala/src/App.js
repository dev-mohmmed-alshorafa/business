import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './helpers/theme'
import Login from './components/login'
import Protect from './components/protect'
import { useSelector } from 'react-redux'
import ProgressLoading from './components/progressLoading'

import Layout from './components/layout/Layout'
import { Box } from '@mui/material'

function App() {
  const user = useSelector((state) => state.user)
  const isLoginLoading = useSelector((state) => state.isLoginLoading)
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Protect />
        {isLoginLoading ? <ProgressLoading /> : user ? <Layout /> : <Login />}
      </ThemeProvider>
    </Box>
  )
}

export default App
