import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Avatar, TextField } from '@mui/material'
import Actions from './Actions'
import Category from '../Select'
import UpdateImg from '../UpdateImg'
import Apiservices from '../../../services/ApiServices'
import CircularProgress from '@mui/material/CircularProgress'

function Row({ row }) {
  const [product, setProduct] = useState(row)
  const [editProduct, setEditProduct] = useState(row)
  const [isEdit, setIsEdit] = useState(false)
  const [img, setImg] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleted, setIsDeleted] = useState(true)
  const [deteted, setDeleted] = useState(true)
  const [changeCategory, setChangeCategory] = useState(
    editProduct && {
      name: editProduct.category.name,
      _id: editProduct.category._id,
    },
  )
  const [category, setCategory] = useState([])
  useEffect(() => {
    if (!isDeleted) {
      setIsLoading(true)

      Apiservices.delete(`/product/${editProduct._id}`).then((res) => {
        setDeleted(false)
        setIsLoading(false)
      })
    }
  }, [isDeleted])

  useEffect(() => {
    Apiservices.get('/category').then((res) => setCategory(res.data.data))
  }, [])
  return (
    <>
      {deteted && (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            {isEdit ? (
              <UpdateImg setImg={setImg} />
            ) : (
              <Avatar src={product.imageProduct} alt={product.name} />
            )}
          </TableCell>
          <TableCell align="center">
            {isEdit ? (
              <TextField
                id="outlined-basic"
                value={editProduct.name}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, name: e.target.value })
                }
                label="Name"
                variant="outlined"
              />
            ) : (
              product.name
            )}
          </TableCell>
          <TableCell align="center">
            {isEdit ? (
              <Category
                changeCategory={changeCategory}
                setChangeCategory={setChangeCategory}
                name={'Category'}
                data={category}
              />
            ) : (
              product.category && product.category.name
            )}
          </TableCell>
          <TableCell align="center">
            {isEdit ? (
              <TextField
                id="outlined-basic"
                value={editProduct.description}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    description: e.target.value,
                  })
                }
                label="Outlined"
                variant="outlined"
              />
            ) : (
              product.description
            )}
          </TableCell>
          <TableCell align="center">
            {isEdit ? (
              <TextField
                id="outlined-basic"
                value={editProduct.price}
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  setEditProduct({ ...editProduct, price: e.target.value })
                }
              />
            ) : (
              product.price
            )}
            {!isEdit && 'ASR'}
          </TableCell>
          <TableCell align="center">
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Actions
                img={img}
                changeCategory={changeCategory}
                editProduct={editProduct}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                setProduct={setProduct}
                setIsLoading={setIsLoading}
                setIsDeleted={setIsDeleted}
              />
            )}
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default Row
