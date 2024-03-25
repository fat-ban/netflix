import "./SignIn.css";

import imgbg from "../../assets/imgbg.jpg";

import SignInForm from "../../Components/SignInForm/SignInForm";

const SignIn = () => {
    return (
        <div className='signin w-100 d-flex justify-content-center align-items-center' style={{
            height: "100vh",
        backgroundImage: `url(${imgbg})`,
        //height:"100vh",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
        }}>
            <SignInForm/>
        </div>
    )
}

export default SignIn;