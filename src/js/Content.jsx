import React from 'react'
import styles from '../css/styles.css'
import Header from "./Header.jsx";
import Photos from './Photos.jsx'

export default function () {

    return(
        <div className={styles.content}>
            <Header/>
            <Photos/>
        </div>
    )
}