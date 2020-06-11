import React from 'react'
import './App.css';
function Gate(props) {

    return (
        <div>
    <h1>Assigment #4</h1>
    {
        props.isOpen ? 'open' : 'Close '
    }        
        </div>
    )
}

export default Gate
