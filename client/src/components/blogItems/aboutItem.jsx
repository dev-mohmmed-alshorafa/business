import { TableCell, TableRow, TextField } from '@mui/material'
import React from 'react'
import Actions from './Actions'
import { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
function AboutItem({ e }) {
  const [isCheck, setIsCheck] = React.useState(false)
  const [item, setItem] = useState(e)
  const [edititem, setEditItem] = useState(e)
  const [userImg, setUserImg] = useState('')
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell sx={{ width: '120px' }} component="th" scope="row">
        {isCheck ? (
          <div style={{ width: '100%' }}>
            <input
              onChange={(e) => setUserImg(e.target.files[0])}
              style={{ display: 'none' }}
              id="BlogImg"
              type={'file'}
            />
            <label htmlFor="BlogImg">
              <AddPhotoAlternateIcon
                sx={{ fontSize: '50px', color: '#3351A6' }}
              />
            </label>
          </div>
        ) : (
          <img
            style={{ width: '70px', height: '70px', borderRadius: '50%' }}
            alt=""
            src={e.img1}
          />
        )}
      </TableCell>

      <TableCell align="center">
        {isCheck ? (
          <TextField
            id="outlined-basic"
            value={edititem.name}
            onChange={(e) => setEditItem({ ...edititem, name: e.target.value })}
            label="name"
            variant="outlined"
          />
        ) : (
          item.name
        )}
      </TableCell>
      <TableCell align="center">
        {isCheck ? (
          <TextField
            id="outlined-basic"
            value={edititem.title}
            onChange={(e) =>
              setEditItem({ ...edititem, title: e.target.value })
            }
            label="name"
            variant="outlined"
          />
        ) : (
          item.title
        )}
      </TableCell>
      <TableCell align="center">
        {isCheck ? (
          <TextField
            id="outlined-basic"
            value={edititem.des}
            onChange={(e) => setEditItem({ ...edititem, des: e.target.value })}
            label="name"
            variant="outlined"
          />
        ) : (
          item.des
        )}
      </TableCell>
      <TableCell align="center">
        <Actions
          item={e}
          setItem={setItem}
          setEditItem={setEditItem}
          edititem={edititem}
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          userImg={userImg}
        />
      </TableCell>
    </TableRow>
  )
}

export default AboutItem
