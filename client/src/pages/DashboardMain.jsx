import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'

function DashboardMain() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actions.setActiveItemMenu(0))
  },[])
  return (
    <div>
      hoho
    </div>
  )
}

export default DashboardMain
