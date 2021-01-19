import React from 'react';

export default function DisplayPolicy({ policyData }) {
    const { policy: { policy_ref, cover, address }, vehicle } = policyData;
    const policyRef = policy_ref.replace(/-/g, " ");
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
