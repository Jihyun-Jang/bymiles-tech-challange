import React, { useState, useEffect } from 'react';

export default function PolicyDetail() {

    const token = window.localStorage.getItem("access_token");
    const [ policyData, setPolicyData ] = useState();

    useEffect(() => {
        
        fetch("https://api.bybits.co.uk/policys/details", {

            method: "GET",
            headers: {
                "environment": "mock",
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }        
        })
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            return res.json();
        })
        .then(json => {            
            setPolicyData(json)
        })
        .catch(error => console.error(error))

    }, []);

    return (
        <div>
            <h1>My Policy</h1>
            {/* <p>Policy reference:</p>
            <p>{}</p>
            <p>Cover type</p>
            <p>{}</p>
            <p>Car</p>
            <p>{}</p>
            <p>Address</p>
            <p>{}</p> */}
        </div>
    )
}
