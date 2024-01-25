import { movieType } from "../../../Type";

import "./Banner.css"

interface PropsMovie{
    movieDetails: movieType;
}

const urlImg = import.meta.env.VITE_TMDB_IMAGE_BASEURL;

const MovieBanner = ({movieDetails}:PropsMovie)=>{
    console.log(movieDetails);


    return(
<section className="header-section " style={{backgroundImage :`url(${urlImg}${movieDetails?.backdrop_path})`,
    backgroundPosition:"center center", backgroundSize:"cover",backgroundRepeat:"no-repeat"
  
    }}>
      <div className="btn-header-section">
        <div className="container">
            <div className="row">
            <h1 className="header-title fs-lg-1 fs-700  fs-md-4 text-white">{movieDetails?.title || movieDetails?.original_title
 || movieDetails?.title} </h1>
        </div>
        <div className="row">
            <div className="col-6 d-flex my-4">
            <button type="button" className="btn btn-list  ms-4 text-white my-3">إعجاب</button>
            <button type="button" className="btn btn-view text-white my-3">تشغيل</button>
            </div>
        </div>
        <div className="row">
            <div className="col-9 overflow-hidden">
                <p className="header-parag text-white fs-lg-5 fs-md-6 fw-300 my-3">{movieDetails?.overview !=="" ? movieDetails?.overview : "لايوجد عرض لهذا الفلم"}</p>
            </div>
            
            </div>
        </div>
        
        
     </div>  
    </section>
    )
}
export default MovieBanner;