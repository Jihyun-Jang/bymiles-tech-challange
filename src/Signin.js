import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default function Signin() {

    const nameRef = useRef();
    const passwordRef = useRef();
    const history = useHistory(); 

    function handleSubmit(e){
        e.preventDefault();

        const data = {
            "username": nameRef.current.value,
            "password": passwordRef.current.value,
            "type":"USER_PASSWORD_AUTH"
        }

        fetch("https://api.bybits.co.uk/auth/token", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 
                "content-type": "application/json",
                "environment": "mock"
            }
        })
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            return res.json();
        })
        .then(json => {    
            window.localStorage.setItem("access_token", json.access_token);        
            history.push('./policy-detail')
        })
        .catch(error => console.error(error))
    }

    return (
        <form onSubmit={handleSubmit} >
            <h2>Sign In</h2>
            <label htmlFor="userName">User Name:</label>
            <input type="text" id="userName" ref={nameRef} required/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={passwordRef} minLength="6" required />            
            <input type="submit" value="Sign in" className="signinBtn" />
        </form>
    )
}
