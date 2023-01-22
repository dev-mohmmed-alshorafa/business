import { Typography } from '@mui/material'
import { Stack, Container } from '@mui/system'
import React, { useEffect } from 'react'
import Items from '../components/aboutItems'
import AboutHeader from '../components/addBtns/about'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'

function AboutUs() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.setActiveItemMenu(1))
  }, [])
  return (
    <Stack justifyContent={'space-evenly'} minHeight={'80vh'}>
      <AboutHeader />
      <Items />
    </Stack>
  )
}

export default AboutUs
