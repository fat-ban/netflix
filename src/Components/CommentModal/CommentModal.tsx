import  {useState ,ChangeEvent } from 'react';

import { IoAttach } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { RiFolderUploadFill } from "react-icons/ri";

//import './IconStyles.css';

import "./CommentModal.css"



const CommentModal = () => {

   
const [value, setValue] = useState<string>("")

const textareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    
}

  return (
    <div className="">
<div className="form-floating">
        <textarea className="textarea-border mt-4 border-0" placeholder="أكتب تعليقات"  cols="90" rows="9" 
        value={value}
        onChange={textareaChangeHandler}
        ></textarea>
       
        <div className="d-flex justify-content-between">
          <button type="button" className={value =="" ? "btn btn-secondary mt-3" : "btn btn-dark mt-3"} 
          onClick={()=>setValue("")}
          
          >أضف التعليق</button>
          
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
  <div className="mt-4">
    <p className="fs-2 text-center">لا يوجد تعليقات حاليا</p>
  </div>

    </div>
    
  )
}

export default CommentModal
