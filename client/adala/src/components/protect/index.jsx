import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
import Apiservices from '../../services/ApiServices'
import JwtService from '../../services/TokenServices'
function Protect() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.setIsLoginLoading(true))

    if (JwtService.getToken()) {
      Apiservices.get('/protect').then((res) => {
        if (res.data && !res.data.msg) {
          dispatch(actions.setIsLoginLoading(false))
          dispatch(actions.login(res.data))
        }
        dispatch(actions.setIsLoginLoading(false))
      })
    } else {
      dispatch(actions.setIsLoginLoading(false))
    }
  }, [])

  return <div></div>
}

export default Protect
