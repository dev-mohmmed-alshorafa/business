import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'
import Apiservices from '../services/ApiServices'
import { Stack } from '@mui/system'
import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
function DashboardMain() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(()=>{
    dispatch(actions.setActiveItemMenu(0))
  },[])
  const [blog,setBlog]=useState(0)
  useEffect(()=>{
    Apiservices.get('/blog').then(res=>setBlog(res.data.length))
  },[])
  const [services, setServices] = useState(0)

  useEffect(() => {
    Apiservices.get('/services').then((res) =>{ 
      setServices(res.data.length)})
  }, [])
  const [contact,setContact]=useState(0)
  useEffect(()=>{
    Apiservices.get('/contact').then(res=>setContact(res.data.length))
  },[])
  const [about, setAbout] = useState(0)
  useEffect(() => {
    Apiservices.get('/about').then((res) =>{ 
      setAbout(res.data.length)
    })
  }, [])
  return (
    <Container sx={{display:'flex',flexDirection:'column',minHeight:'80vh',gap:'50px'}} maxWidth='lg'>
       <Typography align='center' mt={'20px'} color="primary" variant="h4" gutterBottom>
          {t("dashboard")}
        </Typography>
      <Stack>
        <Stack gap={'50px'} flexWrap={'wrap'} justifyContent={'center'} direction={'row'}>
        <Stack gap='20px' minWidth={"300px"} alignItems={'center'} sx={{background:'#ffff',p:10,borderRadius:'12px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      }}>
      <Typography  align='center' color="primary" variant="h4" gutterBottom>
          {t("services")}
        </Typography>
         <Typography   variant="h4" gutterBottom>
          {services}
        </Typography>

      </Stack>
      <Stack gap='20px' minWidth={"300px"} alignItems={'center'} sx={{background:'#ffff',p:10,borderRadius:'12px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      }}>
      <Typography  align='center' color="primary" variant="h4" gutterBottom>
          {t("blog")}
        </Typography>
         <Typography   variant="h4" gutterBottom>
          {blog}
        </Typography>

      </Stack>
      <Stack gap='20px' minWidth={"300px"} alignItems={'center'} sx={{background:'#ffff',p:10,borderRadius:'12px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      }}>
      <Typography  align='center' color="primary" variant="h4" gutterBottom>
          {t("contactUs")}
        </Typography>
         <Typography   variant="h4" gutterBottom>
          {contact}
        </Typography>

      </Stack>
      <Stack gap='20px' minWidth={"300px"} alignItems={'center'} sx={{background:'#ffff',p:10,borderRadius:'12px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      }}>
      <Typography  align='center' color="primary" variant="h4" gutterBottom>
          {t("about")}
        </Typography>
         <Typography   variant="h4" gutterBottom>
          {about}
        </Typography>

      </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default DashboardMain
