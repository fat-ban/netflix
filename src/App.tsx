
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

//router
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
//pages
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from "./Pages/SignUp/SignUp";
import TilawaDetail from './Pages/TilawaDetail/TilawaDetail';


//https://netflix-arabic-clone.vercel.app/

function App() {
  const routes = createBrowserRouter (
    createRoutesFromElements(
      <Route  path="/" element={<Layout/>}>

        <Route index path="/" element={<Home/>}/>
        <Route  path="/tilawat/:id" element={<TilawaDetail/>}/>
        <Route  path="/signup" element={<SignUp/>}/>
        <Route  path="/signin" element={<SignIn/>}/>

      </Route>
    )
  )
  

  return (
    <RouterProvider router={routes}/>
     
    
  )
}

export default App
