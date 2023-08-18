import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCookieToken } from '@src/storage/Cookie'
import { DELETE_TOKEN } from '@src/store/slices/authSlice'

const PrivateRoute = () => {
  const dispatch = useDispatch()

  const access_token = window.localStorage.getItem('accessToken')
  const refresh_token = getCookieToken()
  if (!access_token || !refresh_token) {
    alert('자동 로그아웃 되었습니다.')
    useEffect(() => {
      dispatch(DELETE_TOKEN())
    })
    return <Navigate to="/login" replace={true} />
  }

  return <Outlet />
}

export default PrivateRoute
