import React, {useState} from 'react'
import Photo from './Photo.jsx'
import styles from '../css/photos.css'


export default function () {
    const [valueJson, setValueJson] = useState([]);

    (async function fetchJson() {
        let value = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then(response => response.json())
            .then(json => json.map(el => <Photo obj={el}/>));
        // console.log(value);
        setValueJson(value)
    })();

    return (
        <div className={styles.photosContainer}>
            {valueJson}
        </div>
    )
}

