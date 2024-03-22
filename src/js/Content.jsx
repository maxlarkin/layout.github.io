import React from 'react';
import '../scss/styles.scss';

import Header from "./Header.jsx";
import Photos from './Photos.jsx'

export default function () {

    return(
        <main className='content container'>
            <Header/>
            <Photos/>
        </main>
    )
}