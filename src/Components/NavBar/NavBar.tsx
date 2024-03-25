import {useState,useEffect} from 'react'
import {Button,Form} from 'react-bootstrap';
import avatar from "../../assets/avatar.png";

import "./NavBar.css"
//router
import {NavLink} from "react-router-dom"

const NavBar = () => {
const [color, setColor] = useState<boolean>(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
          setColor(true);
        } else {
          setColor(false);
        }
      };

     
useEffect(() => {
    window.addEventListener("scroll",changeColor)

  return () => {
    window.removeEventListener("scroll",changeColor)
  }
}, [color])


  return (
    <nav className="navbar w-100 fixed-top navbar-style " style={color ? {backgroundColor:"#000"} : {backgroundColor: "transparent"} }>
  <div className="container-fluid">
    <div className="row w-100">
        <div className="col-10">
       <NavLink to="/" className="list-group-item list-group-item-action">
                   <h3 className="fs-4 fw-bold text-uppercase" style={{color:"red"}}>netflix</h3>
              {/*<img src={logo2} alt='logo'/>*/}
        </NavLink>
        </div>
        
        <div className="col-2 ">
             <div className="d-flex justify-content-end">
    {/*<Form.Select size="sm" aria-label="Default select example" className="mx-3" style={{width:"150px"}}>
        <option> العربية</option>
        <option>العربية</option>
        <option>العربية</option>
    </Form.Select>*/}
      <NavLink to='/signup' >
                {/*<Button variant="danger" size="lg" className="px-4">التسجيل</Button>*/}
                <img src={avatar} alt='logo' width={40} height={40} className='rounded-circle'/>
      </NavLink>
      
      
    </div>
    
        </div>

    </div>
       
        
   
   
  </div>
</nav>
  )
}

export default NavBar