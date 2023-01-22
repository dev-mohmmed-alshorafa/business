import { Button, Stack, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'

import Apiservices from '../../../services/ApiServices'
import { useDispatch } from 'react-redux'
import { actions } from '../../../Redux'
function Form({ setOpen }) {
  const [newAbout, setNewAbout] = useState({
    title: '',
    des: '',
    name: '',
  })

  const [userImg, setUserImg] = useState('')

  const dispatch = useDispatch()
  const handelAddAbout = (e) => {
    e.preventDefault()
    const newData = new FormData()
    newData.append('file', userImg)
    newData.append('data', JSON.stringify(newAbout))
    if (newAbout.title && newAbout.des && userImg) {
      Apiservices.post('/blog', newData).then((res) => {
        dispatch(actions.setUpdate())
        setOpen(false)
      })
    } else {
      alert('false')
    }
  }

  return (
    <Container maxWidth="sm">
      <Stack width={'100%'} gap="25px" p="30px 0">
        <form
          onSubmit={handelAddAbout}
          style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
          action=""
        >
          <TextField
            sx={{ width: '300px' }}
            id="outlined-basic"
            label="name Button"
            variant="outlined"
            required
            value={newAbout.name}
            onChange={(e) => setNewAbout({ ...newAbout, name: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={newAbout.title}
            required
            onChange={(e) =>
              setNewAbout({ ...newAbout, title: e.target.value })
            }
          />
          <TextField
            multiline
            maxRows={8}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={newAbout.des}
            required
            onChange={(e) => setNewAbout({ ...newAbout, des: e.target.value })}
          />
          <div>
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

          <Button
            type="submit"
            sx={{ background: '#3351A6', color: '#ffff' }}
            variant="contained"
          >
            Add
          </Button>
        </form>
      </Stack>
    </Container>
  )
}

export default Form
