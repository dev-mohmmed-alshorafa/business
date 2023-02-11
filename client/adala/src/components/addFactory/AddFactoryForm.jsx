import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SelectRef from '../table/Select'
import Apiservices from '../../services/ApiServices'
import { Box, Container, Stack } from '@mui/system'
import UpdateImg from '../table/UpdateImg'
import { useTranslation } from 'react-i18next'
import LoadingForm from '../progressLoading/LoadingForm'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'

function AddFactoryForm({setOpen}) {
  const [changeCategory, setChangeCategory] = useState('')
  const [category, setCategory] = useState([])
  const [img, setImg] = useState('')
  const { t } = useTranslation()

  const [newFactory, setNnewFactory] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
  })
  const dispatch = useDispatch()

const [isLoading,setIsLoading]=useState(false)
  const handelAddProduct = () => {
    const newData = new FormData()
    newData.append('name', newFactory.name)
    newData.append('password', newFactory.password)
    newData.append('address', newFactory.address)
    newData.append('category', changeCategory._id)
    newData.append('email', newFactory.email)
    newData.append('phoneNumber', newFactory.phoneNumber)
    newData.append('image', img)
    setIsLoading(true)
    Apiservices.post('/Factory', newData).then((res) => {
      setIsLoading(false)
      dispatch(actions.setUpdate())
      setOpen(false)

    })
  }
  useEffect(() => {
    Apiservices.get('/category').then((res) => setCategory(res.data.data))
  }, [])
  return (
    <Container
      className="add-product-form"
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
          placeholder={t('address')}
          value={newFactory.address}
          onChange={(e) =>
            setNnewFactory({ ...newFactory, address: e.target.value })
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
        <SelectRef
          changeCategory={changeCategory}
          setChangeCategory={setChangeCategory}
          name={t('category')}
          data={category}
          isTrue={true}
        />
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
      </Stack>
      <Stack
        justifyContent={'center'}
        width={'100%'}
        flexWrap={'wrap'}
        gap={2}
        className="select"
        direction={'row'}
      >
        <Stack
          direction={'row'}
          width={{ xs: '100%', sm: '100%' }}
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
        {t('addFactory')}
      </Button>
      {isLoading && <LoadingForm />}
    </Container>
  )
}

export default AddFactoryForm
