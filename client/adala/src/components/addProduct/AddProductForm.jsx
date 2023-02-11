import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SelectRef from '../table/Select'
import Apiservices from '../../services/ApiServices'
import { Box, Container, Stack } from '@mui/system'
import UpdateImg from '../table/UpdateImg'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import LoadingForm from '../progressLoading/LoadingForm'

function AddProductForm({setOpen}) {
  const [changeCategory, setChangeCategory] = useState('')
  const [changeTrader, setChangeTrader] = useState('')
  const [changeSize, setChangeSize] = useState('')
  const [category, setCategory] = useState([])
  const [img, setImg] = useState('')
  const [size, setSize] = useState([
    {
      _id: 1,
      name: 'XXL',
    },
    {
      _id: 2,
      name: 'XL',
    },
    {
      _id: 3,
      name: 'L',
    },
  ])
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [traders, setTraders] = useState([])
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    industry: '',
    quantity: '',
  })
  useEffect(() => {
    Apiservices.get('/merchant?limit=10000000000').then((res) =>
      setTraders(res.data.data),
    )
  }, [])
  const handelAddProduct = () => {
    const newData = new FormData()
    console.log(newProduct)
    newData.append('image', img)
    newData.append('name', newProduct.name)
    newData.append('category', changeCategory._id)
    newData.append('merchant', changeTrader._id)
    newData.append('Sizes', size.name)
    newData.append('Quantity', newProduct.quantity)
    newData.append('price', newProduct.price)
    newData.append('description', newProduct.description)
    newData.append('Industry', newProduct.industry)
    setIsLoading(true)
    Apiservices.post('/product', newData).then((res) =>{
      setIsLoading(false)
      setOpen(false)
      dispatch(actions.setUpdate())}
    )
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
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          className="input-form"
          id="outlined-basic"
          placeholder={t('industry')}
          value={newProduct.industry}
          onChange={(e) =>
            setNewProduct({ ...newProduct, industry: e.target.value })
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
          placeholder={t('quantity')}
          type="number"
          value={newProduct.quantity}
          onChange={(e) =>
            setNewProduct({ ...newProduct, quantity: e.target.value })
          }
          variant="outlined"
        />{' '}
        <input
          className="input-form"
          id="outlined-basic"
          placeholder={t('price')}
          type="number"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
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
        <SelectRef
          changeCategory={changeSize}
          setChangeCategory={setChangeSize}
          name={t('size')}
          data={size}
          isTrue={true}
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
          changeCategory={changeTrader}
          setChangeCategory={setChangeTrader}
          name={t('trader')}
          data={traders}
          isTrue={true}
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
      <TextField
        className="input-form"
        multiline
        rows={2}
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
        sx={{ width: '100%' }}
        id="outlined-basic"
        label={t('description')}
        variant="outlined"
      />

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
        {t('addProduct')}
      </Button>
      {isLoading && <LoadingForm />}
    </Container>
  )
}

export default AddProductForm
