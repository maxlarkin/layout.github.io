import React from 'react'
import '../scss/photos.scss'

export default function ({obj}) {
    return (
        <div className='photo col-sm-6 col-lg-4 col-xl-3 col-xxl-2' key={obj.id}>
            <img src={obj.url} alt=""/>
            <span>{obj.title}</span>
        </div>
    )
}
