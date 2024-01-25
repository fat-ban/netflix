import "./SignUp.css";

import logonetflix from "../../assets/logonetflix.jpg";

import FormValidation from "../../Components/FormValidation/FormValidation";

const SignUp = () => {
    return (
        <div className='signup w-100 d-flex justify-content-center align-items-center' style={{
            height: "100vh",
        backgroundImage: `url(${logonetflix})`,
        //height:"100vh",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
        }}>
            <FormValidation/>
        </div>
    )
}

export default SignUp;