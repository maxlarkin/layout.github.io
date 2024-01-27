import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './css/styles.css'
import $ from 'jquery'

import Header from './js/Header.jsx'
import Content from './js/Content.jsx'

function Result() {



    return (
        <div className={styles.container}>
            <Header/>
            <Content/>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(<Result/>)
