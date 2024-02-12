import React from 'react'
import '../scss/styles.scss'
import Header from "./Header.jsx";
import Photos from './Photos.jsx'

export default function () {

    return(
        <div className='content'>
            <Header/>
            <Photos/>
        </div>
    )
}