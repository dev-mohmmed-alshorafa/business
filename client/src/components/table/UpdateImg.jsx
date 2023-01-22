import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
function UpdateImg({setImg}) {
  return (
    <div>
      <label htmlFor="img">
          <AddPhotoAlternateIcon sx={{width:'40px',fontSize:'50px'}} color='primary'/>
      </label>
      <input onChange={e=>setImg(e.target.files[0])} style={{display:'none'}} id='img' type='file'/>
    </div>
  )
}

export default UpdateImg
