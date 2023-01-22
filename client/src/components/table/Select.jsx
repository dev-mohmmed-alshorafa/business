import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Apiservices from '../../services/ApiServices'
import { Stack } from '@mui/system'

function SelectRef({ changeCategory, setChangeCategory, name, data, isTrue }) {
  const handleChange = (event) => {
    setChangeCategory(event.target.value)
    console.log(event.target.value);
  }

  return (
    <Box
      id="selected"
      sx={{ minWidth: 120, width:{sm:'243.5px',xs:'100%'},borderRadius:isTrue && '20px' }}
    >
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Stack >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={changeCategory}
          label="Age"
          onChange={handleChange}
          sx={{paddingTop:0}}
        >
          {data.map((e, i) => (
            <MenuItem sx={{background:'var(--background-nav)'}} key={i} value={e}>
              {e.name}
            </MenuItem>
          ))}
         
        </Select>
        </Stack>
      
      </FormControl>
    </Box>
  )
}
export default SelectRef
