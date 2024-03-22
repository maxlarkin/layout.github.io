import React, {useState, useEffect} from 'react'
import Photo from './Photo.jsx'
import Years from './Years.jsx'
import '../scss/photos.scss'


export default function () {
    const [json, setValueJson] = useState([]);
    const [filter, setFilter] = useState({years: []});

    let years = ['1999', '1998', '1997', '1996', '1995'];

    useEffect(() => {
        console.log('fetch');
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1', { method: 'GET' })
            .then(response => response.json())
            .then(json => setValueJson(json))
            .catch(error => {console.log(error)})
    }, []);

    function changeFilter(text, value) {
        setFilter({text: value})
    }

    let elements = json.map(el => <Photo obj={el} key={el.id}/>);



    console.log('render');

    return (
        <div className='photosContainer'>
            <div className='filter'>
                <div className='filters'>
                    <span style={{fontSize: '2rem'}}>filters: </span>

                    {<Years years={years}/>}

                </div>

            </div>
            {/*{getElem(valueJson)}*/}
            <span style={{width: '100%', fontSize: '2rem', display: 'inline-block', paddingLeft: '1rem'}}>photos: </span>
            {elements}
        </div>
    )
}

