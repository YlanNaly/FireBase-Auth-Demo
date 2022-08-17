import {  useState } from "react";
import '../../styles/login.css'
import SignUp from "./signUp";
import { getAuth , GoogleAuthProvider , signInWithPopup ,FacebookAuthProvider ,GithubAuthProvider , signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onLog } from "firebase/app";


export default function InputAuth(){

	const [show,setShow] =useState<boolean>(false)
	const navigate = useNavigate();
	const auth = getAuth();
	const [email,setEmail] =useState("");
	const [password,setPassword] =useState("");
	const [errorMessage,setError] =useState("");
	const [authing,setAuthing] =useState(false);
   
    const registration = async () =>{
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
		  console.log(userCredential.user)
		  navigate('/logout')
        })
        .catch((error) => {
          setError(error.code);
          setError(error.message);
		  console.log(error.code)
        });
    }
	const signInWithGoogle = async () => {
		setAuthing(true);

		signInWithPopup(auth, new GoogleAuthProvider())
		.then((response)=>{
			console.log(response.user.uid);
			navigate('/logout');
		})
		.catch((e)=>{
			console.log(e);
			setAuthing(false);
		})
	}
	const signInWithFacebook = async()=>{
		signInWithPopup(auth ,new FacebookAuthProvider)
		.then((response)=>{
			const credential = FacebookAuthProvider.credentialFromResult(response)
			navigate("/logout")
		})
		.catch((e)=>{
			console.log(e)
		})
	}
	const signInWithGithub = async()=>{
		signInWithPopup(auth, new GithubAuthProvider())
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
	console.log(result.user)
	navigate("/logout")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
	console.log(errorCode)
  });

	}
    return(
        <>
		{
			show  ? <SignUp/> : <div className="container" id="container">
		<div className="form-container sign-in-container">
			<form action="#">
				<h1>Sign In</h1>
				<div className="social-container">
					<a  className="social" onClick={signInWithFacebook}><i className="fab fa-facebook "></i></a>
					<a  className="social" onClick={()=>signInWithGoogle()} ><i className="fab fa-google"></i></a>
					<a  className="social" onClick={()=>signInWithGithub()}><i className="fab fa-github"></i></a>
				</div>
				<span>or use your account</span>
				<input type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
				<input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
				<p>New there , click<a href="#" color="yellow" onClick={()=>setShow(true)} > SIGN UP</a></p>
				<button onClick={()=>registration()}>Sign In</button>
		<p>{errorMessage}</p>
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
