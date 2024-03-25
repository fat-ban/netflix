import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import "./Layout.css";

//router
import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
const Layout = () => {
  return (
    <div className="layout-section position-relative">
       <ToastContainer />
        <NavBar/>
        <Outlet/>

    </div>
  )
}

export default Layout