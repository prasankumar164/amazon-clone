import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import logo from './amazon-logo-three.png'
import { auth } from './firebase'



function Login(event) {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const login = (event) => {
        event.preventDefault();
         auth.signInWithEmailAndPassword(email,password)  
         .then((auth) => {

            history.push("/")
         })
         .catch((e) => alert(e.message))

    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)  
        .then(auth => {
             
            history.push("/")
        })
        .catch((e) => alert(e.message))

    }

    return (
        <div className="login">

            <Link to="/" > 
            <img src={logo} className="login__logo" />
           </Link>

             <div className="login__container"> 
             <h1>Sign In</h1> 

             <form>

            <h5>E-mail</h5>
             <input 
             type="email"
             value={email}
             onChange={event=> setEmail(event.target.value)}
             />

            <h5>Password</h5>
             <input 
             type="password" 
             value={password}
             onChange={event=> setPassword(event.target.value)}
             />
             

             <button onClick={login} type="submit" className="login__button">Sign In</button>
             
             </form>

              <p>Amazon account creation is very easy then you can login using sign in button abovethen purchase your favourite product </p>
              
              <button onClick={register}  className="create__button">Create an Account</button>

             </div>  

        </div>
    )
}

export default Login
