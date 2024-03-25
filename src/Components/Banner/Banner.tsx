//import {useState,useEffect} from 'react'
import { useEffect, useState } from "react";
import { TilawaType } from "../../../Type";
import "./Banner.css";

//type
//import {movieType} from '../../../Type'
//import logonetflix from "../../assets/logonetflix.jpg"

//const urlImg = import.meta.env.VITE_TMDB_IMAGE_BASEURL;



interface tilawaHeaderProps{
    //movieTopRating?:movieType;
    randomTilawa:TilawaType[];
}




const Banner = ({randomTilawa}:tilawaHeaderProps) => {

console.log(randomTilawa);
const [tilawaBanner, setTilawaBanner] = useState<TilawaType>()


const GetTilawaBanner= ()=>{
 
  //const tilawaFetch = randomTilawa[Math.floor(Math.random()* (randomTilawa.length - 1) )]

try {
       //console.log(result);
       (randomTilawa && randomTilawa.length > 0) ?  (
        
           //randomReader = Math.floor(Math.random()* readers.length-1 )
           //setTopTilawa(readers[Math.floor(Math.random()* readers.length-1 )])
           setTilawaBanner(randomTilawa[Math.floor(Math.random()* (randomTilawa.length - 1) )])
          //console.log(randomTilawa[Math.floor(Math.random()* randomTilawa.length-1 )])
           ):(
            console.log("tilawa not found")
           )
   //setTopTilawa(readers[Math.floor(Math.random()* readers.length-1)])
   //setRandomReader(readers[0])
       //[Math.floor(Math.random()* result.data.results.length-1)])
   //console.log(tilawaBanner) 
   
   //console.log(topTilawa)
   //console.log(tilawaFetch)
   } catch (error) {
       console.log(error);
   }
   
}

console.log(tilawaBanner)

useEffect(() => {

  GetTilawaBanner()
},[])




  return (
    <section className="header-section" style={{
      //backgroundImage :`url(${urlImg}${movieTopRating?.backdrop_path})`,
    backgroundImage:`url(${tilawaBanner?.banner})`,
      backgroundPosition:"center center", backgroundSize:"cover",backgroundRepeat:"no-repeat"
  
    }}>
      <div className="btn-header-section">
        <div className="container">
            <div className="row">
            <h1 className="header-title fs-3 text-white">تمتع بأعذب التلاوات وأجمل الاصوات لاشهر القراء </h1>
        </div>
        <div className="row">
            <div className="col-6 my-4">
               <button type="button" className="btn btn-list  ms-4 text-white my-3">قائمتي</button>
               <button type="button" className="btn btn-view text-white my-3">المشاهدة</button>
            </div>
        </div>
        <div className="row">
            <div className="col-9">
                <p className="header-parag text-white fs-6 fw-300 my-3">{/*movieTopRating?.overview !=="" ? movieTopRating?.overview : "لايوجد عرض لهذا الفلم"*/}</p>
            </div>
            
        </div>
        </div>
        
        
     </div>  
    </section>
  )
}

export default Banner;