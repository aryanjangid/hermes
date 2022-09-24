import React from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../Assets/homeback1.png'
import CategoryCard from '../components/CategoryCard'
import { TreadingThalli } from '../data'
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
            <div className={classes.trending}>
                <h2>Treading Thaali in your area</h2>
                <div className={classes.trendingItems}>
                    {TreadingThalli.map((thaali,i)=>(
                        <CategoryCard name={thaali.name} price={thaali.price} description={thaali.item} img={thaali.img}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
