import { FieldValues, useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import "./SignUpForm.css";

import { toast } from "react-toastify";
import { useRegisterationMutation } from "../../slice/userApiSlice";




const SignUpForm = () => {
const [registeration,{isLoading,error}] = useRegisterationMutation()
//console.log(res)
const {
  register, 
  handleSubmit,
  formState:{isSubmitting,
    //errors
  },
  reset,
} = useForm();

//console.log(useForm());

const onSubmit = async(data:FieldValues)=>{
  try {
    console.log(data)
    //if(isValid) {
      const response = await registeration(data).unwrap()
       console.log(response);
      // toast.success('تم التسجيل بنجاح')
       toast.success('تم التسجيل بنجاح', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        //transition: Bounce,
        });
       reset();
    //}
    
  //await new Promise((resolve)=> setTimeout(resolve, 1000))
reset()
  } catch (error) {
    console.error(error)
  }
 
}

  return (
    <div className="form-Validation pt-3" style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: "1" }}>
      <div className="row">
        <div className="col">
          <h3 className="text-white text-center">التسجيل في الموقع</h3>
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
           {/*errors.email &&
            <p className="fs-6 text-danger fw-300">{errors.email.message}</p>*/}
          </div>
        <div className="mb-3">
          <label  className="form-label text-white">اسم المستخدم</label>
          <input 
          {...register("username")}
          type="text" 
          className="form-control" 
          id="exampleInputName" 
          placeholder="username" 
         
          />
          {/*errors.name &&
            <p className="fs-6 text-danger fw-300">{errors.name.message}</p>*/}
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
      {/*errors.password && (
            <p className="fs-6 text-danger fw-300">{errors.password.message}</p>
      )*/}
           
        </div>

        <div className="mb-3 ">
          <input 
          {...register("rememberMe")}
          type="checkbox" 
          className="form-check-input" 
          id="exampleCheck1" 
          />
          <label className="form-check-label  text-white me-2" >تذكّرني</label>

         {/*errors.rememberMe && (
            <p className="fs-6 text-danger fw-300">{errors.rememberMe.message}</p>
         )*/}
         </div>
          {error && (
            <p className="fs-6 text-danger fw-300">{error.data.message}</p>
          )}
        <button 
        disabled={isSubmitting}
        type="submit" 
        className="w-100 my-2 rounded border-0  py-2" 
        style={isSubmitting ? {backgroundColor:"red",color:"#fff"}:{backgroundColor:"#dfcaca", color:"#100"}}>
          {isLoading ? 'قيد التسجيل ...' : 'تسجيل حساب جديد'}
          </button>
      
      <p className='fs-6 text-white'>
                        هل لديك حساب؟ قم بتسجيل الدخول <Link to='/signin' className='text-quran-primary'>من هنا</Link>
                    </p>
      </form>
    </div>

  )
}

export default SignUpForm
