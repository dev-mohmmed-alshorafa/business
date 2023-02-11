import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import AddMerchantBtn from './AddMerchantBtn'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

function AddMerchant() {
  const { t } = useTranslation()
const lng=useSelector(state=>state.lng)
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
        {t('merchants')}
        
      </Typography>
      <AddMerchantBtn />
    </Stack>
  )
}

export default AddMerchant
