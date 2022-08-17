import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../../styles/navbar.css'
export default function LogOut(){
  const auth = getAuth();
	const navigate = useNavigate();
    return(
    <>
    <div className="html-container">
      <div className="html-section">
        <div className="html-project">
          <div className="navigation">
            <nav>
              <ul className="nav-type">
                <li><a  target="_blank" className="active">Home</a></li>
                <li><a  target="_blank" className="active1">About</a></li>
                <li><a  target="_blank" className="active3">Support</a></li>
                <button onClick={()=> signOut(auth).then((response)=>{navigate('/')})} className="active2">Logout</button>
              </ul>
            </nav>
            <h1>Welcome Home!</h1>
          </div>
        </div>
      </div>
      <noscript>
      <div className="first-line">
        <div className="linear">
          <div className="line-w5">
          </div>
        </div>
      </div>
      </noscript>
<noscript>     
      <div className="cyrcle-center">
        <div className="radial-cyrcle">    
        </div>
      </div>
</noscript>
    </div>
    </>
    )
    }