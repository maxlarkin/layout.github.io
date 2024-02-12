import React from 'react'
import '../scss/photos.scss'

export default function ({years}) {
    let result = years.map(year => (
        <li key={year}>
            <div className="form-check form-switch dropdown-item">
                <input className="form-check-input" type="checkbox" role="switch" id={`flexSwitchCheckDefault${year}`}/>
                <label className="form-check-label" htmlFor={`flexSwitchCheckDefault${year}`}>{year}</label>
            </div>
        </li>
    ));
    return (
        <div className='dropdown'>
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside"
                    aria-expanded="false">
                Выбрать год
            </button>
            <ul className="dropdown-menu" aria-labelledby='dropdownButton'>
                {result}
            </ul>
        </div>

    )
}