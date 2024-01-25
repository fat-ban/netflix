import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetail.css";

import { movieType } from '../../../Type';
//import { genreType } from "../../../Type";

import axios from "../../../axios";
import Badge from "../../Components/Badge/Badge";
import MovieBanner from "../../Components/Banner/MovieBanner";
//package
import Rating from "react-rating";

import movieTrailer from 'movie-trailer';

//import { StarIcon } from '@heroicons/react/20/solid';
//import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import YouTube from "react-youtube";
import CommentModal from "../../Components/CommentModal/CommentModal";

const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;
const TMDB_LANG = import.meta.env.VITE_TMDB_LANG;

const options = {
  height: '450px',
  width: "100%",
  playerVars: {
    autoplay: 0,
  }
}
//https://api.themoviedb.org/3/movie/id?api_key:f4562ecd37efc23e11232ecc099dcfe7&append_to_response:"videos"
const MovieDetail = () => {

  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<movieType>({} as movieType)
  const [error, setError] = useState<string>("")
  const [trailer, setTrailer] = useState<string>("")
  //const [url, setUrl] = useState<string>("")
 //Modal
 const [open, setOpen] = useState(false);

  const onOpenModal = ():void => setOpen(true);
  const onCloseModal = ():void => setOpen(false);

type paramsFunc ={
data:movieType;
original_title:string;
title:string;
name:string;
error:string;

}

  const fetchMovieTrailer = async (data : paramsFunc)  => {
  console.log(data);
    try {
      await movieTrailer(data?.original_title || data?.title || data?.name , (error : string, response : string)=> {
    
    if(response) {
       //console.log(response);
     
 
       const urlID = response.split("=");
      // console.log(urlID[1]);
       setTrailer(urlID[1])
    } else {
     console.log(error);
    // setError(error)
    }
   
  } 
  )
  } catch (error) {
    console.log(error.message);
  }
  
  }


  const fetchMovieDetail = async () => {

    try {
     
        const { data } = await axios.get(`/movie/${id}`, {
        params:{
          api_key: TMDB_KEY,
          language : TMDB_LANG,
        }
        
      })

      
      

      console.log(data);
      setMovieDetails(data);
      //console.log(movieTrailer(data.original_title));
      if (data) {

        fetchMovieTrailer(data)
       
     
        


      } else {
          setError("لايوجد فلم بهذا ID");
          //setTrailerID('');
        }
      } catch (err) {
        console.error('Error fetching movie details:', err);
        setError("err.message");
      }
    };
    console.log(error);
    console.log(movieDetails);
    //console.log(urlstate);

   

    useEffect(() => {
      fetchMovieDetail()
    }, [id])


    return (
      <div className="banner-moviedetail bg-dark"
        style={{ width: "100%" }}
      >
        {!error ?
          (
            <>
              <MovieBanner movieDetails={movieDetails} />
              <div className="detail-movie">
               
                  <div className="row">

                    <div className="col-lg-6 col-md-12">
                     {trailer !== "" ? (
                      <YouTube
                        videoId={trailer}
                        opts={options}
                      />
                     ):(
                      <h3 className="text-white text-center mt-5">الفيديو غير متوفر حاليا</h3>
                   )}
                      

                    </div>
                    <div className="col-lg-6 col-md-12">
                    <div className="container ">
                      <h3 className="text-white fs-4 fw-bold">
                        معلومات إضافية عن الفيلم

                      </h3>
                      <table
                      //className="table table-borderless"
                      >
                        <tr>
                          <td className="table-primary  text-white fs-5 pt-4 w-50">رقم الفيلم</td>
                          <td className="table-secondary text-white fs-5 pt-4 pe-4">{movieDetails.id}</td>

                        </tr>
                        <tr >
                          <td className="table-primary text-white fs-5 pt-4">اللغة الاصلية</td>
                          <td className="table-secondary text-white fs-5 pt-4 pe-4">{movieDetails.original_language}</td>

                        </tr>
                        <tr >
                          <td className="table-primary text-white fs-5 pt-4">العنوان الأصلي</td>
                          <td className="table-secondary text-white fs-5 pt-4 pe-4">{movieDetails.original_title}</td>

                        </tr>
                        <tr>
                          <td className="table-primary text-white fs-5 pt-4">تاريخ الإنتاج</td>
                          <td className="table-secondary text-white fs-5 pt-4 pe-4">{movieDetails.release_date}</td>

                        </tr>
                        <tr>
                          <td className="table-primary text-white fs-5 pt-4 ">الكلمات المفتاحية</td>
                          <td className="table-secondary text-white  pt-4 pe-4 d-flex flex-wrap">{movieDetails.genres?.map(genre => {
                            return (
                              <Badge key={genre.id} name={genre.name} />
                            )
                          })}</td>

                        </tr>
                        <tr>
                          <td className="text-white fs-5 pt-4">التصويتات</td>
                          <td className="td-raiting"  >
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/*@ts-expect-error*/}

                            <Rating
                              start={0}
                              stop={10}
                              initialRating={movieDetails.vote_count}
                              readonly={true}
                              emptySymbol={<FaStar style={{ color: "#fff" }} className="w-10 h-10" />}
                              fullSymbol={
                                <FaStar style={{ color: "yellow" }} />
                              }

                            />
                          </td>

                        </tr>
                        <tr>
                          <td className="table-primary text-white fs-1 fw-bold pt-4" style={{cursor:"pointer"}}
                          
                          onClick={onOpenModal}
                          >
                            التعليقات 
                            <span className="me-2">(0)</span> 
                            </td>
                            <Modal 
                            open={open} 
                            onClose={onCloseModal} 
                            center
                            closeOnOverlayClick={false}
                            classNames={{modal:"customModal"}}
                            >
                              <CommentModal/>
                            
                           </Modal>

                        </tr>
                      </table>
                    </div>

                    </div>
                </div>



              </div>
            </>
          ) : (
            <div className="bg-dark" style={{ height: "100vh" }}>
              <div className="container">
                <div className="row">
                  <div className="col  ">
                    <div className="d-flex justify-content-center align-items-center title-err">
                      <h3 className="text-white title-err">{"لايوجد فلم بهذا ID"}</h3>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          )}



      </div>
    )
  }

  export default MovieDetail;