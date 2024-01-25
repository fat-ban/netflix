import {useState,useEffect} from 'react'

import Banner from '../../Components/Banner/Banner'
import Category from '../../Components/Category/Category'

import "./Home.css"
//url
import categories from "../../../Categories-endpoint"
import axios from "../../../axios"
//type

import {movieType} from '../../../Type'






const Home = () => {

    const [bigImg, setBigImg] = useState<boolean>(false)
    const [movieTopRating, setMovieTopRating] = useState<movieType>()
  
//get topRated
    const fetchMovie= async()=>{
        try {
            const result = await axios.get(categories.topRated)
        //console.log(result);
        setMovieTopRating(result.data.results[Math.floor(Math.random()* result.data.results.length-1)])
            //[Math.floor(Math.random()* result.data.results.length-1)])
        //console.log(movieTopRating) 
    
        } catch (error) {
            console.log(error.message);
        }
        
    }
    //console.log(movieTopRating)


useEffect(() => {
    
    fetchMovie()
},[])
     


  return (
    <div className="home-section ">
    <Banner movieTopRating={movieTopRating}  />

    <Category 
    movieShow={categories.netflixDiscover} 
     title="اصول ناتفليكس"
    bigImg={bigImg}
    
  
    />
    <Category movieShow={categories.topRated}
    title="أفلام الأكشن" bigImg={!bigImg}
   
    />
    <Category movieShow={categories.actionMovie}
    title="كوميديا" bigImg={!bigImg}
    
    />
    <Category movieShow={categories.comedyMovies}
    title="الاعلى تقييما" bigImg={!bigImg}
   
    />
    <Category movieShow={categories.documentaries} 
    title="أفلام الرعب" bigImg={!bigImg}
   
    />
    </div>
    
  )
}

export default Home;