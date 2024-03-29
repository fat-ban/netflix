import "./SignUp.css";


import imgbg from "../../assets/imgbg.jpg";

import SignUpForm from "../../Components/SignUpForm/SignUpForm";

const SignUp = () => {
    return (
        <div className='signup w-100  d-flex justify-content-center align-items-center' style={{
            height: "100vh",
            backgroundImage: `url(${imgbg})`,
        //height:"100vh",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
               
        }}>
            <SignUpForm/>
        </div>
    )
}

export default SignUp;