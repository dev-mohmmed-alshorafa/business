import { Typography } from '@mui/material'
import { Stack, Container } from '@mui/system'
import React, { useEffect } from 'react'
import Items from '../components/blogItems'
import BlogHeader from '../components/addBtns/blog'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'

function Blog() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.setActiveItemMenu(3))
  }, [])
  return (
    <Stack justifyContent={'space-evenly'} minHeight={'80vh'}>
      <BlogHeader />
      <Items />
    </Stack>
  )
}

export default Blog
