import React from 'react'
import InputGrps from './InputGrps'

function MidSection() {
    return (
        <div className='mid-container' >
            <InputGrps myLabel="User name:" placeholder="Enter Your Name" type="text" />
            <InputGrps myLabel="Email:" placeholder="Enter Your Email" type="email" />
            <InputGrps myLabel="Phone:" placeholder="Enter Your Phone:No" type="number" />
            <InputGrps myLabel="Password:" placeholder="Enter Strong Password" type="password" />
        </div>
    )
}

export default MidSection