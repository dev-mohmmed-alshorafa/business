import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'

function Dashboard() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actions.setActiveItemMenu(0))
  },[])
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
