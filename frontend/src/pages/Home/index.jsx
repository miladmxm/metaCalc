import { Outlet } from 'react-router-dom'
import MainLayout from '../../layouts/main'

const MainIndex = () => {
  return (
    <MainLayout>
        <Outlet/>
    </MainLayout>
  )
}

export default MainIndex