import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

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
            return setPolicyData(json);            
        })
        .catch(error => console.error(error))
    }, []);


    function displayPolicy(info) {

        const { policy: { policy_ref, cover, address }, vehicle } = info;
        const policyRef = policy_ref.replaceAll("-", " ");
        const car = `${vehicle.make.charAt(0).toUpperCase()+ vehicle.make.slice(1)} ${vehicle.model} ${vehicle.colour.charAt(0).toUpperCase()+ vehicle.colour.slice(1)} ${vehicle.reg}`;
        const fullAddress = `${address.line_1}, ${address.line_2}, ${address.postcode}`;

        return (
            <div>
                <p>Policy reference:</p>
                <p>{policyRef}</p>                    
                <p>Cover type</p>
                <p>{cover}</p>
                <p>Car</p>
                <p>{car}</p>
                <p>Address</p>
                <p>{fullAddress}</p>           
            </div>
        )
    }    

    return (
        <div>
            { token? <>
                <h1>My Policy</h1>
                { policyData ? displayPolicy(policyData) : null }
            </> : <Redirect to='/' />}
        </div>
    )
}
