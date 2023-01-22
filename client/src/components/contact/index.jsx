import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Apiservices from '../../services/ApiServices'
import AboutTable from './TableAbout'
import { useSelector } from 'react-redux'

function Items() {
const update=useSelector(e=>e.update)
const [contact,setContact]=useState([])
useEffect(()=>{
  Apiservices.get('/contact').then(res=>setContact(res.data))
},[update])
  return (
    <Box>
      <AboutTable contact={contact}/>
      
    </Box>
  )
}

export default Items
