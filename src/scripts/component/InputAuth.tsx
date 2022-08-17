import {  useState } from "react";
import '../../styles/login.css'
import SignUp from "./signUp";
import { getAuth , GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function InputAuth(){

	const [show,setShow] =useState<boolean>(false)
	const navigate = useNavigate();
	const auth = getAuth();
	const [email,setEmail] =useState<string>();
	const [password,setPassword] =useState<string>();
	const [authing,setAuthing] =useState(false);

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

    return(
        <>
		{
			show ? <SignUp/> : <div className="container" id="container">
		<div className="form-container sign-in-container">
			<form action="#">
				<h1>Sign In</h1>
				<div className="social-container">
					<a  className="social"><i className="fab fa-github-plus-g"></i></a>
					<a  className="social" onClick={()=>signInWithGoogle()} ><i className="fab fa-google-plus-g"></i></a>
					<a  className="social"><i className="fab fa-linkedin-in"></i></a>
				</div>
				<span>or use your account</span>
				<input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
				<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
				<p>New there , click<a href="#" color="yellow" onClick={()=>setShow(true)} > SIGN UP</a></p>
				<button>Sign In</button>
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