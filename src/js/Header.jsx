import React from 'react'
import styles from '../css/styles.css'
import Menu from '../img/menu.png'

export default function Header() {
    const arr = ['menu', 'contacts', 'news', 'about us'];
    return (
        <div className={styles.header}>
            {arr.map((el, i) => <div key={i} className={styles.header_elem}>{el}</div>)}
            <div className={styles.header_menu} style={{textAlign: 'end', paddingRight: '2rem'}}>
                <img src={Menu} alt="" className={styles.img}/>
            </div>
        </div>
    )
}