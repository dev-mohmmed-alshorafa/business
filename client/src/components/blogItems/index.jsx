import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import AboutTable from './TableAbout'
import { useSelector } from 'react-redux'

function Items() {
const update=useSelector(e=>e.update)
const [blog,setBlog]=useState([])
useEffect(()=>{
  Apiservices.get('/blog').then(res=>setBlog(res.data))
},[update])
  return (
    <Box>
      <AboutTable blog={blog}/>
      
    </Box>
  )
}

export default Items
