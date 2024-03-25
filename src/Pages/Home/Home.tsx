import { useEffect, useState } from 'react'

import { useGetAllReadersQuery } from "../../slice/readersApiSlice"

import Banner from '../../Components/Banner/Banner'
import Category from '../../Components/Category/Category'

import { Reader, TilawaType } from '../../../Type'
import "./Home.css"

import { ClipLoader } from "react-spinners"
//url
//import axios from "../../../axios"
//type

//import { movieType } from '../../../Type'





const Home = () => {

    const {data:readers,error,isLoading} = useGetAllReadersQuery()
   console.log(readers)

   const [randomTilawa, setRandomTilawa] = useState<TilawaType[]>()
    //const [bigImg, setBigImg] = useState<boolean>(false)
    //const [movieTopRating, setMovieTopRating] = useState<movieType>()
  
//get topRated
    const GetTopReader= ()=>{
       //let randomReader = 0
       
     try {
            //console.log(result);
            (readers && readers.length > 0) ?  (
            
                setRandomTilawa(readers[Math.floor(Math.random()* (readers.length-1) )].tilawat)
                ):(
                 console.log("tilawa not found")
                )
        
       // console.log(randomTilawa) 
        
    
        } catch (error) {
            console.log(error);
        }
        
    }
    //console.log(movieTopRating)


useEffect(() => {
    
    GetTopReader()
},[])
     


  return (
    <div className="home-section ">
    <Banner 
    randomTilawa={randomTilawa}  
    />
    {error && (<p className='text-dark'>لا يوجد نتائج حاليا</p>)}
    {isLoading && <ClipLoader color="#36d7b7"/>}
    {!isLoading && readers && readers.length > 0 ? (
        <>
        {readers.map((reader: Reader) => 
   (
        <Category 
    //movieShow={categories.netflixDiscover} 
     key={reader._id}
     readername={reader.name}
     tilawats= {reader.tilawat}
    //bigImg={bigImg}
  
    />
    )
)}
        </>
       

    ):(
        <p className='text-dark'>لا يوجد نتائج حاليا</p>
    )}

    
    {/*<Category movieShow={categories.topRated}
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
   
  />*/}
    </div>
    
  )
}

export default Home;