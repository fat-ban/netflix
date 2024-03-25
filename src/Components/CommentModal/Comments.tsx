import { commentType } from "../../../Type";
import Comment from "./Comment";

interface PropsComment {
  comments:commentType[];
}

const Comments = ({comments} : PropsComment) => {
  console.log(comments);
  return (
    <div className="col justify-content-center align-items-center">
      {comments.length>0 && comments?.map((comment, index) => (
      <Comment comment={comment}/>
      ))}
       {comments.length <= 0 && <p className='font-bold text-lg text-center pt-5'>لا يوجد تعليقات حاليا</p>}
    </div>
  )
}

export default Comments