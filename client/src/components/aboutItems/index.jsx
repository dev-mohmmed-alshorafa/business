import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import AboutTable from './TableAbout'
import { useSelector } from 'react-redux'

function Items() {
  const [about, setAbout] = useState([])
const update=useSelector(e=>e.update)
  useEffect(() => {
    Apiservices.get('/about').then((res) =>{ 
      setAbout(res.data)
    })
  }, [update])
  return (
    <Box>
      <AboutTable about={about}/>
      
    </Box>
  )
}

export default Items
