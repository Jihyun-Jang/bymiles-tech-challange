import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {

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
            <h1>Sign In</h1>
            <label htmlFor="userName">User Name:</label>
            <input type="text" id="userName" ref={nameRef} required/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={passwordRef} required />
            <button type="submit">Sign in</button>
        </form>
    )
}
