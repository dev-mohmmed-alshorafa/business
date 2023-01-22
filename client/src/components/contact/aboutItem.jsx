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
     

      <TableCell align="center">
        {isCheck ? (
          <TextField
            id="outlined-basic"
            value={edititem.contact}
            onChange={(e) => setEditItem({ ...edititem, contact: e.target.value })}
            label="name"
            variant="outlined"
          />
        ) : (
          item.contact
        )}
      </TableCell>
      <TableCell align="center">
        {isCheck ? (
          <TextField
            id="outlined-basic"
            value={edititem.address}
            onChange={(e) =>
              setEditItem({ ...edititem, address: e.target.value })
            }
            label="name"
            variant="outlined"
          />
        ) : (
          item.address
        )}
      </TableCell>
      <TableCell align="center">
        {isCheck ? (
          <TextField
            id="outlined-basic"
            value={edititem.Schedule}
            onChange={(e) => setEditItem({ ...edititem, Schedule: e.target.value })}
            label="name"
            variant="outlined"
          />
        ) : (
          item.Schedule
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
