//import {useState,useEffect} from 'react'
import "./Banner.css"

//type
import {movieType} from '../../../Type'
//import logonetflix from "../../assets/logonetflix.jpg"

const urlImg = import.meta.env.VITE_TMDB_IMAGE_BASEURL;



interface movieHeaderProps{
    movieTopRating?:movieType;

}




const Banner = ({movieTopRating}:movieHeaderProps) => {

console.log(movieTopRating);

    


  return (
    <section className="header-section" style={{backgroundImage :`url(${urlImg}${movieTopRating?.backdrop_path})`,
    backgroundPosition:"center center", backgroundSize:"cover",backgroundRepeat:"no-repeat"
  
    }}>
      <div className="btn-header-section">
        <div className="container">
            <div className="row">
            <h1 className="header-title  text-white">{movieTopRating?.title || movieTopRating?.original_title
               || movieTopRating?.title} </h1>
        </div>
        <div className="row">
            <div className="col-6 my-4">
               <button type="button" className="btn btn-list  ms-4 text-white my-3">قائمتي</button>
               <button type="button" className="btn btn-view text-white my-3">المشاهدة</button>
            </div>
        </div>
        <div className="row">
            <div className="col-9">
                <p className="header-parag text-white fs-6 fw-300 my-3">{movieTopRating?.overview !=="" ? movieTopRating?.overview : "لايوجد عرض لهذا الفلم"}</p>
            </div>
            
        </div>
        </div>
        
        
     </div>  
    </section>
  )
}

export default Banner;