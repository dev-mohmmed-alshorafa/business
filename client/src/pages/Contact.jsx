
import { Typography } from '@mui/material'
import { Stack, Container } from '@mui/system'
import React, { useEffect } from 'react'
import Items from '../components/contact'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.setActiveItemMenu(4))
  }, [])
  return (
    <Stack justifyContent={'space-evenly'} minHeight={'80vh'}>
         <Typography mr={7} color="primary" variant="h4" gutterBottom>
          {t("contactUs")}
        </Typography>
        <Items/>
    </Stack>
  )
}

export default Contact
