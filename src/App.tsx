
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//router
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom"
//pages
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
import SignUp from "./Pages/SignUp/SignUp";

//https://netflix-arabic-clone.vercel.app/

function App() {
  const routes = createBrowserRouter (
    createRoutesFromElements(
      <Route  path="/" element={<Layout/>}>

        <Route index path="/" element={<Home/>}/>
        <Route  path="/movie/:id" element={<MovieDetail/>}/>
        <Route  path="/signup" element={<SignUp/>}/>

      </Route>
    )
  )
  

  return (
    <RouterProvider router={routes}/>
     
    
  )
}

export default App
