import TimeAgo from "react-timeago";
import { commentType } from "../../../Type";
// @ts-ignore
import arabStrings from 'react-timeago/lib/language-strings/ar';
// @ts-ignore
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';



interface PropsComment {
   comment: commentType;
}

const formatter = buildFormatter(arabStrings)

const Comment = ({comment}: PropsComment) => {
  console.log(comment);
  const {user, text, createdAt}= comment
  return (
    <div className="row">
      <div className="col-12">
      <div className="d-flex align-items-center ">
      <div className="rounded">
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{width: "30px"}}
         alt="Avatar" />
      </div>
  <div className="">
      <p className="" style={{fontSize:"9px"}}>
        <time>
                            <TimeAgo
                                className="text-sm text-gray-500"
                                date={createdAt}
                                formatter={formatter}
                            />
        </time>
      </p>
  </div>
     
      </div>
      </div>
      <div className="col">
        <div className="d-grid mx-4 bg-light p-3 rounded">
       <p className="text-end fw-bold" style={{fontSize:"9px"}}>{user.username}</p>
       <p  className="text-dark text-end lh-sm" style={{fontSize:"12px"}}>{text}</p>
       </div>
       </div>
    </div>
  )
}

export default Comment