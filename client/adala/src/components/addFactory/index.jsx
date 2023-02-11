import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import AddFactoryBtn from './AddFactoryBtn'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

function AddFactory() {
  const { t } = useTranslation()
  return (
    <Stack
      mt={{ xs: 4 }}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Typography
        sx={{ fontWeight: 700, fontSize: '32px' }}
        variant="h4"
        gutterBottom
      >
        {t('factorys') }
      </Typography>
      <AddFactoryBtn />
    </Stack>
  )
}

export default AddFactory
