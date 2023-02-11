import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
function Search({ text, changeText }) {
  const { t } = useTranslation()
  const lng = useSelector((state) => state.lng)
  return (
    <Stack
      direction="row"
      sx={{
        background: 'var(--icons-search-bar)',
        padding: '35px 20px',
        boxShadow:
          '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
        borderRadius: '8px',
      }}
    >
      <FormControl
              dir={lng !=='en' && "rtl"}

        sx={{
          m: 1,
          maxWidth: '400px',
        }}
      >
        <InputLabel htmlFor="outlined-adornment-amount">
          {t('search')}
        </InputLabel>
        <OutlinedInput
          value={text}
          onChange={(e) => changeText(e.target.value)}
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          label="Amount"
        />
      </FormControl>
    </Stack>
  )
}

export default Search
