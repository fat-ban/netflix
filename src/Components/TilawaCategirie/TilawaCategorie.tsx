import { TilawaType } from "../../../Type";

import { SwiperSlide } from 'swiper/react';

//

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface TilawaProps{
   
   tilawats: TilawaType[];
 }

const TilawaCategorie = ({tilawats}: TilawaProps) => {
   console.log(tilawats)
   return (
    <div>
       {tilawats?.length > 0 && tilawats?.map((tilawa:TilawaType) => 
                   (
                      <SwiperSlide 
                         key={tilawa._id} 
                  //onClick={()=> navigate(`/movie/${movie.id}`)} 
                          className="swiper-img my-3 mx-3"
                          >
                    
                      <img src={tilawa?.thumbnail} className="img-swiper" alt={tilawa?.title} />
          
                  
                
                        <div className="text-blok d-flex justify-content-center align-items-center w-100 h-20">
                      {/*!bigImg && <h3 className="text-white fs-4 text-center title-swiper">{movie.name}</h3>*/}
          
                      </div>
                      </SwiperSlide>
                  
                  
               
                        )
                      )} 
       {tilawats?.length== 0 && <h3 className="">لا يوجد تلاوات حاليا</h3>}     
                
    </div>
  )
}

export default TilawaCategorie