import { ReactComponentElement, useState } from "react";
import '../../styles/App.css';
import Login from "../pages/log";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { FirebaseApp } from "firebase/app";

export default function SignUp({signInWithFacebook ,signInWithGithub ,signInWithGoogle}:any){
	const [show,setShow] =useState<boolean>(false)
    const [email,setEmail] =useState("");
	const [password,setPassword] =useState("");
    const auth = getAuth();
   
    const registration = (event :any) =>{
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
   

    return(
        <>
        {
            show ? <Login/> :  <div className="container" id="container" >
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign Up</h1>
                <div className="social-container">
                    <a  className="social" onClick={()=>signInWithFacebook()}><i className="fab fa-facebook "></i></a>
					<a  className="social" onClick={()=>signInWithGithub()}><i className="fab fa-google"></i></a>
					<a  className="social" onClick={()=>signInWithGoogle()}><i className="fab fa-github"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    <p>Have account already , click<a href="#" color="yellow" onClick={()=>setShow(true)} > SIGN IN</a></p>
                <button onClick={registration}>Sign Up</button>
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