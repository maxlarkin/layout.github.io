import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './css/styles.css'
import Content from './js/Content.jsx'

function Result() {
    return (
        <div className={styles.container}>
            <Content/>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(<Result/>)
