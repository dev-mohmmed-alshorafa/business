import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../Redux'
import { Stack } from '@mui/system'
import { Container, Typography } from '@mui/material'
import Search from '../components/search'
import CustomersTable from '../components/table/customers'
import Apiservices from '../services/ApiServices'
import { useTranslation } from 'react-i18next'

function Customers() {
  const [textSearch, setTextSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const lng = useSelector((state) => state.lng)
  useEffect(() => {
    setIsLoading(true)

    if (textSearch) {
      console.log(textSearch)
      Apiservices.get(`/users?name[regex]=${textSearch}&role=user`).then(
        (res) => {
          setIsLoading(false)
          dispatch(actions.setCustomers(res.data.data))
        },
      )
    } else {
      Apiservices.get(`/users?page=1&role=user`).then((res) => {
        setIsLoading(false)
        dispatch(actions.setCustomers(res.data.data))
      })
    }
  }, [textSearch])

  useEffect(() => {
    dispatch(actions.setActiveItemMenu(1))
  }, [])
  return (
    <Container maxWidth="lg">
      <Stack  minHeight={'100vh'} justifyContent={'center'} gap={5}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '32px',
            marginTop: '31px',
          }}
          variant="h4"
          gutterBottom
        >
          {t('customers')}
        </Typography>
        <Search text={textSearch} changeText={setTextSearch} />
        <CustomersTable isLoading={isLoading} setIsLoading={setIsLoading} />
      </Stack>
    </Container>
  )
}

export default Customers
