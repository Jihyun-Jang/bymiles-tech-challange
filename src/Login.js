import React, { useRef } from 'react';

export default function Login() {

    const nameRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
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
