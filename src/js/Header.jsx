import React from 'react'
import '../scss/styles.scss'

export default function Header() {

    return (
        <header className='header'>
            <div className='logo '>Галерея Каменской школы (v1.3.1)</div>
            <ul className='nav nav-tabs nav-fill'>
                <li className='nav-item'>вкладка 1</li>
                <li className='nav-item'>вкладка 2</li>
                <li className='nav-item'>вкладка 3</li>
            </ul>

        </header>
    )
}