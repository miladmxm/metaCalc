import React, { useContext } from 'react'
import { mainContext } from '../context/main'
import { Navigate, useLocation } from 'react-router-dom'

const AuthUser = (WrappedComponent) => {
  return (props) => {
    const {pathname} = useLocation()
    const { user } = useContext(mainContext)
    if (user && user.username) {
      return (
        <WrappedComponent {...props} />
      )
    } else {
      return (
        <Navigate to={"../login"} state={{from:pathname}}/>
      )
    }
  }
}

export default AuthUser
