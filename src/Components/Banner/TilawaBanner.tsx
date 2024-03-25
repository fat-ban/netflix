import { TilawaType } from "../../../Type";

import "./Banner.css";

interface PropsTilawa{
    tilawa: TilawaType;
}

const TilawaBanner = ({tilawa}:PropsTilawa)=>{
    console.log(tilawa);


    return(
<section className="header-section " style={{backgroundImage :`url(${tilawa.banner})`,
    backgroundPosition:"center center", backgroundSize:"cover",backgroundRepeat:"no-repeat"
  
    }}>
      <div className="btn-header-section">
        <div className="container">
            <div className="row">
            <h1 className="header-title fs-lg-1 fs-700  fs-md-4 text-white">{
 tilawa.title} </h1>
        </div>
        <div className="row">
            <div className="col-6 d-flex my-4">
            <button type="button" className="btn btn-list  ms-4 text-white my-3">إعجاب</button>
            <button type="button" className="btn btn-view text-white my-3">تشغيل</button>
            </div>
        </div>
        <div className="row">
            <div className="col-9 overflow-hidden">
                <p className="header-parag text-white fs-lg-5 fs-md-6 fw-300 my-3">{tilawa?.description !=="" ? tilawa?.description : "لايوجد عرض لهذا "}</p>
            </div>
            
            </div>
        </div>
        
        
     </div>  
    </section>
    )
}
export default TilawaBanner;