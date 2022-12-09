import React from 'react'

function MyButton(props) {
    return (
        <div className='btn-contanier' >
            <button className='btn' >{props.buttonText}</button>
        </div>
    )
}

export default MyButton