import {useState,useEffect} from 'react'
import "./Category.css"
//route
import { useNavigate } from 'react-router-dom';

//import categories from '../../../Categories-endpoint';
//type
import { movieType } from '../../../Type'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from "../../../axios";

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//spinner
import FadeLoader from "react-spinners/ClipLoader";


// import required modules
import {Pagination,Navigation } from 'swiper/modules';
//icons
//import {MdOutlineArrowForwardIos} from 'react-icons/md';
//import {MdOutlineArrowBackIos} from 'react-icons/md';

const URL = "https://image.tmdb.org/t/p/original";

interface originProps{
  movieShow:string;
//urlImg:string;
//backdrop_path:string;
title:string;
bigImg:boolean;
}


const Category = ({movieShow,title,bigImg}:originProps) => {

  const navigate = useNavigate()

    //console.log(urlImg)
    const [movieCategory, setMovieCategory] = useState<movieType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
//console.log(movieShow)

const fetchMovieCategory= async()=>{
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
    
  }, [])



  return (
    <section className="section-category" style={ bigImg? {height:"40vh",backgroundColor:"#000"}:{height:"65vh",backgroundColor:"#000"}}>
      <div className="container-fluid">
        <div className="row">
         
            <h1 className="origin-title text-white my-3">{title}</h1>
        </div>
     </div>
        <div className="row ">
          
        {loading ?(
         
          <FadeLoader
          color="#36d7b7"
          //loading={loading}
          //cssOverride={override}
          //size={150}
          height={25}
          width={15}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="me-5"
        />
        
        ):(
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
            {movieCategory?.map(movie=>{
                return(
                     
        <SwiperSlide key={movie.id} onClick={()=> navigate(`/movie/${movie.id}`)} className="swiper-img my-3 mx-3">
          
            <img src={!bigImg ? `${URL}${movie?.poster_path}`: `${URL}${movie?.backdrop_path}`} className="img-swiper" alt="{movie.title}" />

        
      
           <div className="text-blok d-flex justify-content-center align-items-center w-100 h-20">
            {/*!bigImg && <h3 className="text-white fs-4 text-center title-swiper">{movie.name}</h3>*/}

       </div>
        </SwiperSlide>
        
        
     
                )
            })}
           
        </Swiper>
        )}
          
        </div>
        
     
      
    </section>
  )
}

export default Category;
