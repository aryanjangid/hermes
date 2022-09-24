import React from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../Assets/homeback1.png'
import CategoryCard from '../components/CategoryCard'
import classes from './home.module.css'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={classes.heroDiv}>
                <div className={classes.landingContent}>
                    <h1>
                        Taste The Food That<br /> Surprise you
                    </h1>
                    <h3>Quality Indian cuisine at affordable prices</h3>
                    <button onClick={() => navigate('/buy')}>KHA</button>
                    <button onClick={() => navigate('/sell')}>KHILA</button>
                </div>
                <div className={classes.landingImage}>
                    <img src={background}></img>
                </div>
            </div>
            <div>
                <h2>Treading Thaali in your area</h2>
                <div>
                    <CategoryCard />
                </div>
            </div>
        </div>
    )
}

export default Home
