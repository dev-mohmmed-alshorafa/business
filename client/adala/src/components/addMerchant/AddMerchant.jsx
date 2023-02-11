import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Apiservices from '../../services/ApiServices'
import { Container, Stack } from '@mui/system'
import UpdateImg from '../table/UpdateImg'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
import ProgressLoading from '../progressLoading'
import LoadingForm from '../progressLoading/LoadingForm'

function AddMerchantForm({setOpen}) {
  const [img, setImg] = useState('')
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const [newFactory, setNnewFactory] = useState({
    name: '',
    email: '',
    password: '',
    TradeName: '',
    phoneNumber: '',
    packages: '63c41209858965379009073a',
  })
  const merchants = useSelector((e) => e.customers)
  const dispatch = useDispatch()

  const handelAddProduct = () => {
    const newData = new FormData()
    console.log(newFactory)
    newData.append('image', img)
    newData.append('TradeName', newFactory.TradeName)
    newData.append('email', newFactory.email)
    newData.append('password', newFactory.password)
    newData.append('phoneNumber', newFactory.phoneNumber)
    newData.append('name', newFactory.name)
    newData.append('packages', newFactory.packages)
    setIsLoading(true)
    Apiservices.post('/merchant', newData).then((res) => {
      dispatch(actions.setCustomers([...merchants, res.data.data]))
      dispatch(actions.setUpdate())
      setIsLoading(false)
      setOpen(false)
    })
  }

  return (
    <Container
      className="add-merchant-form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: '20px',
        borderRadius: '20px',
        background: 'var(--background-nav)',
      }}
      maxWidth="sm"
    >
      <Stack
        flexWrap={'wrap'}
        justifyContent={'center'}
        gap={2}
        direction={'row'}
        width={'100%'}
        sx={{ borderRadius: '20px' }}
      >
        <input
          className="input-form"
          id="outlined-basic"
          placeholder={t('name')}
          value={newFactory.name}
          onChange={(e) =>
            setNnewFactory({ ...newFactory, name: e.target.value })
          }
        />
        <input
          className="input-form"
          id="outlined-basic"
          placeholder={t('email')}
          value={newFactory.email}
          onChange={(e) =>
            setNnewFactory({ ...newFactory, email: e.target.value })
          }
        />
      </Stack>
      <Stack
        width={'100%'}
        justifyContent={'center'}
        flexWrap={'wrap'}
        gap={2}
        direction={'row'}
      >
        <input
          className="input-form"
          id="outlined-basic"
          placeholder={t('password')}
          value={newFactory.password}
          onChange={(e) =>
            setNnewFactory({ ...newFactory, password: e.target.value })
          }
          variant="outlined"
        />
        <input
          className="input-form"
          id="outlined-basic"
          placeholder={t('tradeName')}
          value={newFactory.TradeName}
          onChange={(e) =>
            setNnewFactory({ ...newFactory, TradeName: e.target.value })
          }
        />
      </Stack>
      <Stack
        justifyContent={'center'}
        width={'100%'}
        flexWrap={'wrap'}
        gap={2}
        className="select"
        direction={'row'}
      >
        <input
          className="input-form"
          id="outlined-basic"
          placeholder={t('phoneNum')}
          type="number"
          value={newFactory.phoneNumber}
          onChange={(e) =>
            setNnewFactory({ ...newFactory, phoneNumber: e.target.value })
          }
        />
        <Stack
          direction={'row'}
          width={{ xs: '100%', sm: '243.5px' }}
          justifyContent={'center'}
          alignItems={'center'}
          gap={2}
          sx={{ border: '1px solid #b8b8b8', borderRadius: '20px' }}
        >
          <Typography
            sx={{ fontWeight: 500, fontSize: '20px' }}
            variant="body"
            gutterBottom
          >
            {t('uploadImg')}
          </Typography>
          <UpdateImg setImg={setImg} />
        </Stack>
      </Stack>
      <Stack
        justifyContent={'center'}
        width={'100%'}
        flexWrap={'wrap'}
        gap={2}
        className="select"
        direction={'row'}
      ></Stack>

      <Button
        onClick={handelAddProduct}
        sx={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '20px',
        }}
        variant="contained"
      >
        {t('addMerchant')}
      </Button>
      {isLoading && <LoadingForm />}
    </Container>
  )
}

export default AddMerchantForm
