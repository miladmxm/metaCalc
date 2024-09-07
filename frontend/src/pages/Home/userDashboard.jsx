import React, { useContext } from 'react'
import AuthUser from '../../HOC/authUser'
import { logoutUser } from '../../services/HTTP'
import { mainContext } from '../../context/main'

const UserDashboard = () => {
  const {clearUser} = useContext(mainContext)
  const logout =async ()=> {
    const data =await logoutUser()
    if(data){
      console.log(data)
      clearUser()
    }
  }
  return (
    <div onClick={logout}>
      logout
    </div>
  )
}

export default AuthUser(UserDashboard)
