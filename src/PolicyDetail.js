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
    }, [ token ]);


    function displayPolicy(info) {

        const { policy: { policy_ref, cover, address }, vehicle } = info;
        const policyRef = policy_ref.replaceAll("-", " ");
        const car = `${vehicle.make.charAt(0).toUpperCase()+ vehicle.make.slice(1)} ${vehicle.model} ${vehicle.colour.charAt(0).toUpperCase()+ vehicle.colour.slice(1)} ${vehicle.reg}`;
        const fullAddress = `${address.line_1}, ${address.line_2}, ${address.postcode}`;

        return (
            <div>
                <h4>Policy reference:</h4>
                <p>{policyRef}</p>                    
                <h4>Cover type</h4>
                <p>{cover}</p>
                <h4>Car</h4>
                <p>{car}</p>
                <h4>Address</h4>
                <p>{fullAddress}</p>           
            </div>
        )
    }    

    return (
        <div className="policyContainer">
            { token? <>
                <h2>My Policy</h2>
                { policyData && displayPolicy(policyData) }
            </> : <Redirect to='/' />}
        </div>
    )
}
