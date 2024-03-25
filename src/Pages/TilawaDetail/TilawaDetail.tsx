import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RootState } from "../../store/store";

import { useAddReviewMutation, useGetTilawaQuery } from "../../slice/tilawatApiSlice";

import "./MovieDetail.css";

//import { genreType } from "../../../Type";
import TilawaBanner from "../../Components/Banner/TilawaBanner";
//package
import Rating from "react-rating";
import YouTube from 'react-youtube';

//import { FaRegStar } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CommentModal from "../../Components/CommentModal/CommentModal";



const options = {
  height: '450px',
  width: "100%",
  playerVars: {
    autoplay: 0,
  }
}
//https://api.themoviedb.org/3/movie/id?api_key:f4562ecd37efc23e11232ecc099dcfe7&append_to_response:"videos"
const TilawaDetail = () => {

 const {userInfo} = useSelector((state:RootState)=> state.auth)

 //console.log(selector);
  const { id } = useParams();
  
const {data: tilawa, isError,error, isLoading} = useGetTilawaQuery(id)
 console.log(error)
 
 const[addReview,{isLoading:isLoadingAddReview,error:errorAddReview}] = useAddReviewMutation(id)
console.log(addReview);
  const [urlVideo, setUrlVideo] = useState<string>("")
 //Modal
 const [open, setOpen] = useState(false);

  const onOpenModal = ():void => setOpen(true);
  const onCloseModal = ():void => setOpen(false);


{isError && <div>Error</div>}
{isLoading && <div>Loading ....</div>}



useEffect(() => {
 const getVideoId = (link : string | null) : void => {
  if(link) {
    const idYoutub = link.split("=")
    if(idYoutub.length > 1) {
      setUrlVideo(idYoutub[1])
    }
  }
 }

 if(!isLoading && tilawa && tilawa.url) {
  getVideoId(tilawa.url.toString())
 }
  
}, [isLoading,tilawa]); // Run this effect only once on component mount

const handleChangeReview = () => {
  console.log("review");
}
    return (
      <div className="banner-moviedetail bg-dark"
        style={{ width: "100%" }}
      >
        {isError && (
          <h3>{error?.message}</h3>
        )
        
        }
        {!isLoading && tilawa && (
            <>
              <TilawaBanner 
              tilawa={tilawa} 
              />
              <div className="detail-movie">
               
                  <div className="row">

                    <div className="col-lg-6 col-md-12">
                     {!isLoading ? (
                      <YouTube
                        videoId={urlVideo}
                        opts={options}
                      />
                     ):(
                      <p> Loading...</p>
                     )}
                      

                    </div>
                    <div className="col-lg-6 col-md-12">
                    
                      <table
                      //className="table table-borderless"
                      >
                        <thead>
                          <div className="container ">
                      <h3 className="text-white fs-4 fw-bold">
                        معلومات إضافية حول التلاوة

                      </h3>
                      </div>
                        </thead>
                        <tbody>
                        <tr>
                          <td className="table-primary  text-white fs-5 pt-4 w-50">رقم التلاوة</td>
                          <td className="table-secondary text-white fs-5 pt-4 pe-4">{tilawa?._id}</td>

                        </tr>
                        <tr >
                          <td className="table-primary text-white fs-5 pt-4">المستخدم الذي اضاف التلاوة</td>
                          <td className="table-secondary text-white fs-5 pt-4 pe-4">
                            
                              {tilawa?.user.username}
                          </td>

                        </tr>
                        <tr >
                          <td className="table-primary text-white fs-5 pt-4">العنوان </td>
                          <td className="table-secondary text-white fs-5 pt-4 pe-4">{tilawa?.title}</td>

                        </tr>
                        <tr>
                          <td className="table-primary text-white fs-5 pt-4">القارئ</td>
                          <td className="table-secondary text-white fs-5 pt-4 pe-4">{tilawa.reader.name}</td>

                        </tr>
                        <tr>
                          <td className="table-primary text-white fs-5 pt-4 ">الترجمات</td>
                          <td className="table-secondary text-white  pt-4 pe-4">{tilawa?.translations?.map((translation, index) => {
                            return (
                            
                            <span key={index} className="badge bg-secondary mx-2"> {translation.language}</span>
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
                              initialRating={tilawa?. total_reviews}
                              readonly={!userInfo}
                              emptySymbol={<FaStar style={{ color: "#fff" }} className="w-10 h-10" />}
                              fullSymbol={
                                <FaStar style={{ color: "yellow" }} />
                              }
                              onChange={handleChangeReview}
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
                        </tbody>
                      </table>
                    </div>

                    
                </div>



              </div>
            </>
          ) }
           {/* <div className="bg-dark" style={{ height: "100vh" }}>
              <div className="container">
                <div className="row">
                  <div className="col  ">
                    <div className="d-flex justify-content-center align-items-center title-err">
                      <h3 className="text-white title-err">{"لايوجد فلم بهذا ID"}</h3>

                    </div>
                  </div>
                </div>

              </div>
                            </div>*/}

     



      </div>
    )
  
  }

  export default TilawaDetail;