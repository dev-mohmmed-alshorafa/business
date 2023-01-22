import { TableCell, TableRow, TextField } from '@mui/material'
import React from 'react'
import Actions from './Actions'
import { useState } from 'react'

function AboutItem({ e }) {
  const [isCheck, setIsCheck] = React.useState(false)
  const [item, setItem] = useState(e)
  const [edititem, setEditItem] = useState(e)
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
      {isCheck ? (
          <TextField
            id="outlined-basic"
            value={edititem.img}
            onChange={(e) =>
              setEditItem({ ...edititem, img: e.target.value })
            }
            label="name"
            variant="outlined"
          />
        ) : (
          <i style={{color:'#3351A6',fontSize:'25px',borderRadius:'50%',border:'1px solid #3351A6',padding:'5px'}} className={item.img}></i>
        )}
      </TableCell>
      <TableCell align='center'>
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
          <TextField id="outlined-basic" 
          value={edititem.des}
          onChange={(e) =>
            setEditItem({ ...edititem, des: e.target.value })
          }
           label="name" variant="outlined" />
        ) : (
          item.des
        )}
      </TableCell>
      <TableCell align="center">
        <Actions item={e} setItem={setItem} setEditItem={setEditItem} edititem={edititem} isCheck={isCheck} setIsCheck={setIsCheck} />
      </TableCell>
    </TableRow>
  )
}

export default AboutItem
