import React, { useState, useEffect } from 'react';
import DisplayPolicy from './DisplayPolicy';

export default function PolicyDetail({ accessToken }) {
    
    const [ policyData, setPolicyData ] = useState();    

    useEffect(() => {        
        fetch("https://api.bybits.co.uk/policys/details", {
            method: "GET",
            headers: {
                "environment": "mock",
                "Authorization": `Bearer ${accessToken}`,
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
    }, [ accessToken ]);
      

    return (
        <div className="policyContainer">            
            <h2>My Policy</h2>
            { policyData && <DisplayPolicy policyData={policyData} />}            
        </div>
    )
}
