import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Content from './js/Content.jsx'

function Result() {
    return (
        <div className='container-fluid'>
            <Content/>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(<Result/>)
