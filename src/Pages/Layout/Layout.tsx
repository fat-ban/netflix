import "./Layout.css"

//router
import { Outlet } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
const Layout = () => {
  return (
    <div className="layout-section">
        <NavBar/>
        <Outlet/>

    </div>
  )
}

export default Layout