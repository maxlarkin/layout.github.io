import React from 'react'
import ReactDOM from 'react-dom'
import './css/styles.css'

console.log('test');

function Result() {
    return (
        <>
            <h1>title</h1>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(<Result/>)