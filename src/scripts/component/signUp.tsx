import { useState } from "react";
import '../../styles/App.css';
import Login from "../pages/log";
import { getAuth , GoogleAuthProvider , signInWithPopup ,FacebookAuthProvider ,GithubAuthProvider , signInWithEmailAndPassword} from "firebase/auth";
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export default function SignUp(){
	const [show,setShow] =useState<boolean>(false)
    const [email,setEmail] =useState("");
	const [password,setPassword] =useState("");
    const auth = getAuth();
	const [errorMessage,setError] =useState("");
	const navigate = useNavigate();
   
    const registration = (event :any) =>{
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
		  console.log(userCredential.user)
		  navigate('home')
        })
        .catch((error) => {
          setError(error.code);
          setError(error.message);
		  console.log(error.code)
        });
        })
        .catch((error) => {
          setError(error.code);
          setError(error.customData.email)
          setError(error.message);
        });
    }
    const signInWithGoogle = async () => {
		signInWithPopup(auth, new GoogleAuthProvider())
		.then((response)=>{
			console.log(response.user.uid);
			navigate('home');
		})
		.catch((error)=>{
			console.log(error);
            setError(error.code);
            setError(error.customData.email)
            setError(error.message);
		})
	}
	const signInWithFacebook = async()=>{
		signInWithPopup(auth ,new FacebookAuthProvider)
		.then((response)=>{
			const credential = FacebookAuthProvider.credentialFromResult(response)
			navigate("home")
		})
		.catch((error)=>{
			console.log(error)
            setError(error.code);
            setError(error.customData.email)
            setError(error.message);
		})
	}
	const signInWithGithub = async()=>{
		signInWithPopup(auth, new GithubAuthProvider())
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
	console.log(result.user)
	navigate("home")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
	console.log(errorCode)
    setError(error.code);
    setError(error.customData.email)
    setError(error.message);
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
					<a  className="social" onClick={()=>signInWithGoogle()}><i className="fab fa-google"></i></a>
					<a  className="social" onClick={()=>signInWithGithub()}><i className="fab fa-github"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    <p>Have account already , click<a href="#" color="yellow" onClick={()=>setShow(true)} > SIGN IN</a></p>
                <button onClick={registration}>Sign Up</button>
                {
					errorMessage != null ? <p style={{backgroundColor:"#ea4335" , color:"white"}}>{errorMessage}</p> : <p></p>
				}
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