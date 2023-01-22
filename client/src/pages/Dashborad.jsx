import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Login from '../components/login'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../Redux'

function Dashborad() {
  const user=useSelector(e=>e.user)

  return <div>
   {  user ? <Layout /> : <Login />}
  </div>
}

export default Dashborad
