import { Typography } from '@mui/material'
import { Stack, Container } from '@mui/system'
import React, { useEffect } from 'react'
import Items from '../components/serviesItems'
import { useDispatch } from 'react-redux'
import SerivesHeader from '../components/addBtns/servise'
import { actions } from '../Redux'
import { useTranslation } from 'react-i18next'

function Services() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.setActiveItemMenu(2))
  }, [])
  return (
    <Stack justifyContent={'space-evenly'} minHeight={'80vh'}>
      <SerivesHeader />
      <Items />
    </Stack>
  )
}

export default Services
