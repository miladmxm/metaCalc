import { Outlet } from 'react-router-dom'
import AdminLayout from '../../layouts/admin'

const Dashboard = () => {
  return (
    <AdminLayout>
        <Outlet/>
    </AdminLayout>
  )
}

export default Dashboard