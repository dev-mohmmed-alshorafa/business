import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Avatar, TextField } from '@mui/material'
// import Actions from './Actions'
import Category from '../Select'
import UpdateImg from '../UpdateImg'
import Apiservices from '../../../services/ApiServices'
import CircularProgress from '@mui/material/CircularProgress'
import Actions from './Actions'
import { useSelector } from 'react-redux'

function Row({ row }) {
  const [product, setProduct] = useState(row)
  const [editProduct, setEditProduct] = useState(row)
  const [isEdit, setIsEdit] = useState(false)
  const [img, setImg] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleted, setIsDeleted] = useState(true)
  const lng=useSelector(state=>state.lng)
  useEffect(() => {
    if (!isDeleted) {
      setIsLoading(true)
      Apiservices.put(`/users/${editProduct._id}`, {
        banned: !editProduct.banned,
      }).then((res) => {
        setEditProduct({ ...editProduct, banned: res.data.data.banned })
        setIsLoading(false)

        setIsDeleted(true)
      })
    }
  }, [isDeleted])

  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align={lng !=='en'? 'right':'left'} component="th" scope="row">
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
            <TextField
              id="outlined-basic"
              value={editProduct.email}
              onChange={(e) =>
                setEditProduct({ ...editProduct, email: e.target.value })
              }
              label="Email"
              variant="outlined"
            />
          ) : (
            product.email
          )}
        </TableCell>
        <TableCell align="center">
          {isEdit ? (
            <TextField
              id="outlined-basic"
              value={editProduct.phoneNumber}
              onChange={(e) =>
                setEditProduct({ ...editProduct, phoneNumber: e.target.value })
              }
              type={'number'}
              label="Phone Num"
              variant="outlined"
            />
          ) : (
            product.phoneNumber
          )}
        </TableCell>

        <TableCell align="center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Actions
              img={img}
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
    </>
  )
}

export default Row
