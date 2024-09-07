import React, { useContext } from 'react'
import { mainContext } from '../context/main'
import { Navigate } from 'react-router-dom'

const AuthUser = (WrappedComponent) => {
  return (props) => {
    const { user } = useContext(mainContext)
    if (user && user.username) {
      return (
        <WrappedComponent {...props} />
      )
    } else {
      return (
        <Navigate to={"../login"} />
      )
    }
  }
}

export default AuthUser
