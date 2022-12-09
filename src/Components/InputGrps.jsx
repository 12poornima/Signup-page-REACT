import React from 'react'

function InputGrps(props) {
    return (
        <div className='input-grps' >
            <label htmlFor="">{props.myLabel}</label>
            <input className='inputfield' type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default InputGrps