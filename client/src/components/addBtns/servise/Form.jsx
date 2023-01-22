import { Button, Stack, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import Apiservices from '../../../services/ApiServices'
import { useDispatch } from 'react-redux'
import { actions } from '../../../Redux'
function Form({ setOpen }) {
  const [newAbout, setNewAbout] = useState({
    title: '',
    des: '',
    img: '',
  })
  const dispatch = useDispatch()
  const handelAddAbout = (e) => {
    e.preventDefault()
    if(newAbout.title&&newAbout.des&&newAbout.img){

    Apiservices.post('/services', newAbout).then((res) => {
      dispatch(actions.setUpdate())
      setOpen(false)
    })
  }else{
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
            label="Title"
            variant="outlined"
            required
            value={newAbout.title}
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
          />{' '}
          <TextField
            multiline
            maxRows={8}
            id="outlined-basic"
            label="Icon"
            variant="outlined"
            value={newAbout.img}
            required
            onChange={(e) => setNewAbout({ ...newAbout, img: e.target.value })}
          />
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
