import React, {useState} from 'react'
import styles from '../css/styles.css'
import Car1 from '../img/car1.jpg'
import Car2 from '../img/car2.jpg'
import Car3 from '../img/car3.jpg'

export default function() {

    const cars = [Car1, Car2, Car3];

    const [currentCar, setCurrentCar] = useState(0);

    function changeCount(count) {
        if(count >= cars.length) return 0;
        else if (count < 0) return cars.length - 1;
        else { return count}
    }

    function prevImg() {
        setCurrentCar(changeCount(currentCar - 1))

    }

    function nextImg() {
        setCurrentCar(changeCount(currentCar + 1))
    }

    return(
        <div className={styles.container + ' ' + styles.content}>
            <div className={styles.slider}>
                <span style={{position: 'absolute', color: 'white', left: '29%', top: '15%', fontSize: '2rem'}}>{currentCar+1}</span>
                <div className={styles.arrow} onClick={prevImg}>←</div>
                <div className={styles.slider_img}><img src={cars[currentCar]} alt=""/></div>
                <div className={styles.arrow} onClick={nextImg}>→</div>
            </div>
        </div>
    )
}

