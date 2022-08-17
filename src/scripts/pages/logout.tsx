import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import '../../styles/navbar.css'
export default function LogOut(){
  const auth = getAuth();
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
                <li><a>          <button onClick={()=> signOut(auth)} className="active2">Logout</button>
</a></li>
              </ul>
            </nav>
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
<template>
      <div className="flash-fluid">
        <div className="flash-time">
          <div className="flash-GIF">
            
          </div>
        </div>
       </div>
</template>
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