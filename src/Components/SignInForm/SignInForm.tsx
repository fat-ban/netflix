import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../../slice/authSlice";
import { useLoginMutation } from "../../slice/userApiSlice";
import "./SignInForm.css";



const SignInForm = () => {

const {
  register, 
  handleSubmit,
  formState:{isSubmitting},
  //reset,
} = useForm()

  const [login,{data,error,isLoading,isSuccess}] = useLoginMutation()
  //const res = useLoginMutation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
//console.log(error)

const onSubmit = async (data:FieldValues)=>{
 try {
 
  const response = await login(data).unwrap();
  //console.log(response);
  dispatch(setCredentials(response))
  if(response._id){
      navigate('/');
  }
 } catch (error) {
  console.error(error)
 }
  
  //await new Promise((resolve)=> setTimeout(resolve, 1000))
   //const response = await login(data).unwrap()
    //dispatch(res)
    //if(response._id)

  //reset()
  //await login(data)
}

let content;
if (isLoading) {
  content = <p>Loading...</p>
}else if (isSuccess) {
  console.log(data)
}else if (error) {
  content = <p>{"error"}</p>
}

  return (
    <div className="form-Validation pt-3" style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: "1" }}>
      <div className="row">
        <div className="col">
          <h3 className="text-white text-center">الدخول في موقع قراء القرآن</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-3 rounded" >
        <div className="mb-3">
          <label  className="form-label text-white ">الإيميل</label>
          <input 
          {...register("email")}
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          placeholder="name@test.com" 
          
          />
          
          </div>
        
        <div className="mb-3">
          <label  className="form-label text-white">كلمة السر</label>
          <input 
          {...register("password")}
          type="password" 
          className="form-control" 
          id="exampleInputPassWord" 
          placeholder="********" 
         
          />
          
        </div>

        <div className="mb-3 ">
          <input 
          {...register("rememberMe")}
          type="checkbox" 
          className="form-check-input" 
          id="exampleCheck1" 
          />
          <label className="form-check-label  text-white me-2" >تذكّرني</label>

         
        </div>
        {error && (
            <p className="fs-6 text-danger fw-300">
              {error.data.message}
              </p>
          )}
        <button 
        disabled={isSubmitting}
        type="submit" 
        className="w-100 my-2 rounded border-0  py-2" 
        style={isSubmitting ? {backgroundColor:"red",color:"#fff"}:{backgroundColor:"#dfcaca", color:"#100"}}>
         {isLoading ? 'جاري الدخول ...' : 'دخول'}
          </button>
        
        <p className="fs-6 text-white">
        لا تملك حساب؟ قم بالتسجيل <Link to='/signup' className='text-quran-primary'>من هنا</Link>
        </p>
        {content}
      </form>
    </div>

  )
}

export default SignInForm
