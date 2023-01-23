import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import AboutTable from './TableAbout'
import { useSelector } from 'react-redux'

function Items() {

  const update = useSelector((e) => e.update)
  const [services, setServices] = useState([])
  useEffect(() => {
    Apiservices.get('/services').then((res) => {
      setServices(res.data)
    })
  }, [update])
  return <Box>
    <AboutTable services={services}/>
    </Box>
}

export default Items
