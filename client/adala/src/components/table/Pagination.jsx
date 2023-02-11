import * as React from 'react'
import TablePagination from '@mui/material/TablePagination'
import { Stack } from '@mui/system'
import { IconButton, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useSelector } from 'react-redux'
export default function Pagination({ pagination, setPage, page }) {
  const [count, setCount] = React.useState(0)
  const lng=useSelector(e=>e.lng)
  const next = () => {
    if (page < pagination.pagination.pages) {
      setPage(page + 1)
      setCount(count + 6)
    } else {
      setPage(1)
      setCount(0)
    }
  }
  const back = () => {
    if (page > 1) {
      setPage(page - 1)
      setCount(count-6)
    }
  }
  return (
    <Stack sx={{position:'absolute',bottom:'12px',right:'20px'}} direction={lng==='en'?'row':'row-reverse'} alignItems={'center'} justifyContent={'flex-end'}>
      <Typography dir='ltr' variant="subtitle2" gutterBottom>
        {count} -{(count+6) < pagination.pagination.total?( count + 6):pagination.pagination.total} of {pagination.pagination.total}
      </Typography>
      <IconButton onClick={back}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton onClick={next}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  )
}
