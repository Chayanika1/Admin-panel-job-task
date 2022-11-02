import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './Home.css'
import app from '../../firebase.init';


const Home = () => {
    const provider = new GoogleAuthProvider();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const auth = getAuth(app);
    const HandlEmail=(e)=>{
        setEmail(e.target.value);

    }
    const HandlPassword=(e)=>{
        setPassword(e.target.value);

    }
    const HandleFormSubmit=(e)=>{
        console.log(email,password);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
        e.preventDefault();
    }
    const SubmitGoogle=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      

    }
    return (
        <div>
            <div id="login-box">
                <div class="left">
                    <h1>Sign up</h1>
                    <form onSubmit={HandleFormSubmit}>
                    <input onBlur={HandlEmail} type="text" name="email" placeholder="E-mail" />
                    <input onBlur={HandlPassword} type="password" name="password" placeholder="Password" />
                    
                    <input type="submit" name="signup_submit" value="Sign me up" />

                    </form>

                    
                   
                </div>

                <div class="right">
                    <span class="loginwith">Sign in with<br />social network</span>

                    <button class="social-signin facebook">Log in with facebook</button>
                    <button class="social-signin twitter">Log in with Twitter</button>
                    <button onClick={SubmitGoogle} class="social-signin google">Log in with Google+</button>
                </div>
                <div class="or">OR</div>
            </div>

        </div>
    );
};

export default Home;