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
                <span style={{fontSize: '2rem', fontStyle: 'Italic', textTransform: 'uppercase'}}>f@cking filters: </span>
                <div className='filters'>

                    {/*<form>*/}
                        {/*<label>year: </label>*/}
                        {/*<select name='years'*/}
                        {/*        multiple*/}
                        {/*        size='1'*/}
                        {/*        className='years'*/}
                        {/*        id='years'*/}
                        {/*        value={filter.years}*/}
                        {/*        onChange={e => changeFilter('years', e.target.value)}*/}
                        {/*    >*/}
                        {/*    <option value=''>all</option>*/}
                        {/*    <option value="1999">1999</option>*/}
                        {/*    <option value="1998">1998</option>*/}
                        {/*    <option value="1997">1997</option>*/}
                        {/*    <option value="1996">1996</option>*/}
                        {/*    <option value="1995">1995</option>*/}
                        {/*</select>*/}
                    {/*</form>*/}

                    {<Years years={years}/>}

                </div>

            </div>
            {/*{getElem(valueJson)}*/}
            {elements}
        </div>
    )
}

