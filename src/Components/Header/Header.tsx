import {useState,useEffect} from 'react'
import "./Header.css"

//type
import {movieType} from '../../../Type'
//import logonetflix from "../../assets/logonetflix.jpg"

interface movieHeaderProps{
    movieTopRating?:movieType;
    urlImg:string;
}




const Header = ({movieTopRating,urlImg}:movieHeaderProps) => {

console.log(movieTopRating);

    


  return (
    <section className="header-section" style={{backgroundImage :`url(${urlImg}${movieTopRating?.backdrop_path})`,height:"90vh",
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
            <button type="button" className="btn btn-list  ms-4 text-white">قائمتي</button>
<button type="button" className="btn btn-view text-white">المشاهدة</button>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <p className="header-parag text-white fs-5 fw-300 my-3">{movieTopRating?.overview}</p>
            </div>
            
        </div>
        </div>
        
        
     </div>  
    </section>
  )
}

export default Header