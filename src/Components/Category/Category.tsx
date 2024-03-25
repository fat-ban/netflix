import "./Category.css";
//route

//import categories from '../../../Categories-endpoint';


//https://www.elbalad.news/3401045///video tilawat

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination } from 'swiper/modules';
//type
import { useNavigate } from "react-router-dom";
import { TilawaType } from "../../../Type";
//spinner


// import required modules
//icons
//import {MdOutlineArrowForwardIos} from 'react-icons/md';
//import {MdOutlineArrowBackIos} from 'react-icons/md';

//const URL = "https://image.tmdb.org/t/p/original";

interface originProps{
  readername: string;
  tilawats: TilawaType[];
}


const Category = ({

  readername,
  tilawats
 
}:originProps) => {

  const navigate = useNavigate()

    //console.log(urlImg)
   // const [movieCategory, setMovieCategory] = useState<Tilawa[]>([])
    //const [loading, setLoading] = useState<boolean>(true)
console.log(tilawats)

/*const fetchMovieCategory= async()=>{
  try {
      const result = await axios.get(movieShow)
  //
  console.log(result);
  setMovieCategory(result.data.results)
      //[Math.floor(Math.random()* result.data.results.length-1)])
  //console.log(result.data.results) 

  } catch (error) {
      console.log(error.message);
  }finally{
setLoading(false)
  }
  
}
  //console.log(movieTopRating) 

  useEffect(() => {
    
    fetchMovieCategory()
    
  }, [])*/



  return (
    <section className="section-category" 
    //style={ bigImg? {height:"40vh",backgroundColor:"#000"}:{height:"65vh",backgroundColor:"#000"}}
    >
      <div className="container-fluid">
        <div className="row">
         
            <h1 className="origin-title text-dark my-3">{readername}</h1>
        </div>
      </div>
        <div className="row ">
          
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 80 },
            480: { slidesPerView: 3, spaceBetween: 150 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 6, spaceBetween: 40 },
          }}
        //slidesPerView={6}
        //spaceBetween={30}
        loop={true}
        
        /*navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
         }}*/
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      
          
               
                {tilawats?.length > 0 && tilawats?.map((tilawa:TilawaType) => 
                   (
                      <SwiperSlide 
                         key={tilawa._id} 
                        onClick={()=> navigate(`/tilawat/${tilawa._id}`)} 
                          className="swiper-img my-3 mx-3"
                          >
                    
                      <img src={tilawa?.thumbnail} className="img-swiper" alt={tilawa?.title} />
          
                  
                
                        <div className="text-blok d-flex justify-content-center align-items-center w-100 h-20">
                      {/*!bigImg && <h3 className="text-white fs-4 text-center title-swiper">{movie.name}</h3>*/}
          
                      </div>
                      </SwiperSlide>
                  
                  
               
                        )
                      )} 
                 {tilawats?.length === 0 && <h3 className="origin-title text-dark my-3">لا يوجد تلاوات حاليا</h3>}     
                
                
       
        </Swiper>
         
        </div>
        
     
      
    </section>
  )
}

export default Category;
