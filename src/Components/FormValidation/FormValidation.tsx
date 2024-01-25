import { useForm } from "react-hook-form";

import "./FormValidation.css";


import { zodResolver } from "@hookform/resolvers/zod";



import { TsignUpSchema, signUpSchema } from "../../lib/types";

const FormValidation = () => {

const {
  register, 
  handleSubmit,
  formState:{errors,isSubmitting},
  reset,
 

} = useForm<TsignUpSchema>({
  resolver: zodResolver(signUpSchema)
})

console.log(useForm());

const onSubmit = async(data:TsignUpSchema)=>{
 console.log(data);
  //await new Promise((resolve)=> setTimeout(resolve, 1000))
reset()
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
          <label 
          //for="exampleInputEmail1" 
          className="form-label text-white ">الإيميل</label>
          <input 
          {...register("email")}
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          placeholder="name@test.com" 
          
          />
          {errors.email && (
            <p className="fs-6 text-danger fw-300">{errors.email.message}</p>
          )}
          </div>
        <div className="mb-3">
          <label 
          //for="exampleInputName" 
          className="form-label text-white">اسم المستخدم</label>
          <input 
          {...register("name")}
          type="text" 
          className="form-control" 
          id="exampleInputName" 
          placeholder="name" 
         
          />
           {errors.name && (
            <p className="fs-6 text-danger fw-300">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label 
          //for="exampleInputPassWord" 
          className="form-label text-white">كلمة السر</label>
          <input 
          {...register("password")}
          type="password" 
          className="form-control" 
          id="exampleInputPassWord" 
          placeholder="********" 
         
          />
           {errors.password && (
            <p className="fs-6 text-danger fw-300">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-3 form-check">
           <label className="form-check-label  text-white" 
           //for="exampleCheck1"
           >تذكّرني</label>
          <input 
          {...register("rememberMe")}
          type="checkbox" 
          className="form-check-input" 
          id="exampleCheck1" 
          />
         {errors.rememberMe && (
            <p className="fs-6 text-danger fw-300">{errors.rememberMe.message}</p>
          )}
        </div>
        <button 
        disabled={isSubmitting}
        type="submit" 
        className="w-100 my-2 rounded border-0  py-2" 
        style={isSubmitting ? {backgroundColor:"red",color:"#fff"}:{backgroundColor:"#dfcaca", color:"#100"}}>تسجيل حساب جديد</button>
      </form>
    </div>

  )
}

export default FormValidation
