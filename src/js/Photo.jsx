import React from 'react'
import styles from '../css/photos.css'

export default function ({obj}) {
    return (
        <div className={styles.photo} key={obj.id*3}>
            <img src={obj.url} alt=""/>
            <span>{obj.title}</span>
        </div>
    )
}
