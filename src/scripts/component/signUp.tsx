import { ReactComponentElement, useState } from "react";
import '../../styles/App.css';
import Login from "../pages/log";
export default function SignUp(){
	const [show,setShow] =useState<boolean>(false)

    return(
        <>
        {
            show ? <Login/> :  <div className="container" id="container" >
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign Up</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-github-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                    <p>Have account already , click<a href="#" color="yellow" onClick={()=>setShow(true)} > SIGN IN</a></p>
                <button>Sign Up</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                    <div className="overlay-panel overlay-right">
                    <i className="Title">Vacation Day Agency</i>
                    <p >Votre Agence de Voyage </p>
                    </div>
                </div>
            </div>
        </div>
        }
</>
    )
}