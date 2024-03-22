import React from 'react'
import '../scss/photos.scss'

export default function ({obj}) {

    function clickHandler(evt) {
        // evt.target.classList.toggle('photo-active')
    }

    return (
        <div className='photo col-sm-6 col-lg-4 col-xl-3' key={obj.id}>
            <img src={obj.url} alt="" onClick={clickHandler} draggable={false}/>
            <span style={{fontStyle: 'italic'}}>{obj.title}</span>
        </div>
    )
}
