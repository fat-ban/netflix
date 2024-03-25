import { ChangeEvent, MouseEvent, useState } from 'react';

import { GiPositionMarker } from "react-icons/gi";
import { IoAttach } from "react-icons/io5";
import { RiFolderUploadFill } from "react-icons/ri";

import { useAddCommentMutation, useGetAllCommentsQuery } from '../../slice/tilawatApiSlice.ts';

//import './IconStyles.css';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { RootState } from '../../store/store.ts';
import "./CommentModal.css";
import Comments from './Comments.tsx';



const CommentModal = () => {

  const {id} = useParams();
  const { userInfo } = useSelector((state: RootState) => state.auth);
//console.log(userInfo);

  const {data:comments,error, isLoading, refetch} = useGetAllCommentsQuery(id)
  console.log(comments);
  const [addComment,{error:errorAddComment,isLoading:isLoadingAddComment}] = useAddCommentMutation()

  {errorAddComment&& <p>{errorAddComment?.data?.message}</p>}

  //const [text, setText] = useState<string[]>([])
   
const [text, setText] = useState<string>("")
const [showComments, setShowComments] = useState<boolean>(false)

const textareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
}

const handleAddComment = async(e: MouseEvent<HTMLButtonElement>) => {
  try {
     e.preventDefault()
//setText([...value,value])
   const data ={text}
   //console.log(text);
   
   const newComment = await addComment({id,data}).unwrap()
console.log(newComment);
   if(newComment._id){
       toast.success("تم اضافة التعليق بنجاح");
       setText("")
       refetch();
     }else{
      //toast.error("لم يتم اضافة التعليق");
      console.log("لم يتم اضافة التعليق");
     }

  } catch (error) {
    console.log(error);
  }
  
}

const handleShowComments = () => {
  console.log("show all Comment");
setShowComments(!showComments)
}


  return (
    <div className="d-">
      <h1 className='fs-4 text-center text-dark'>التعليق</h1>
      <div className="form-floating">
        <textarea className="textarea-border form-control mt-4 py-5 border-0" placeholder="أكتب تعليقات"  style={{height:"100px"}}
        value={text}
        onChange={textareaChangeHandler}
        ></textarea>
       
        <div className="d-flex justify-content-between">
          <button 
          type="button" 
          className={text =="" ? "btn btn-secondary mt-3" : "btn btn-dark mt-3"} 
          onClick={handleAddComment}
          
           > 
          
          {isLoadingAddComment ? "جاري اضافة التعليقات": "التعليقات"}
          </button>
          
          <div className="icon-modal d-flex mt-3">
          <IoAttach size={25} className="custom-icon"/>
          <GiPositionMarker size={25}  className="custom-icon mx-3"/>

          <RiFolderUploadFill size={25}  className="custom-icon"/>
          
          </div>
          
          
        </div>

    </div>
    <div className="d-flex">
    <small className="text-secondary flex-start mt-3">تذكر أن المساهمات في هذا الموضوع يجب أن تخضع إلى<a href="" style={{textDecoration:"none"}}>سياسة الاستخدام .</a></small>
  
  
  </div> 
  <button 
          type="button" 
          className= "btn btn-dark mt-3 d-flex flex-row-reverse"
          onClick={handleShowComments}
          
           > 
          
          {isLoadingAddComment ? <><ClipLoader color="#36d7b7"/> "جاري عرض التعليقات "</>: "عرض التعليقات"}
  </button>
  <div className="mt-4 overflow-y-auto">
 
      
      {error && <p className='text-danger'>{error.data?.message || error.error}</p>}
      {isLoading && <ClipLoader color="#36d7b7"/>}

      {showComments && 

      !isLoading && comments && <Comments comments={comments}/>
      }
     
    
   
      
  </div>

    </div>
    
  )
}

export default CommentModal
