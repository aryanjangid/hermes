import React from 'react'
import classes from './hero.module.css'


const Hero = (props) => {
    return (
        <div className={classes.heroDiv} style={{ backgroundImage: `url(${props.background})`, padding: '10rem' }}>
            <h1 >Nana Shree Mess</h1>
            <h3>Famous for Matar Paneer</h3>
        </div>
    )
}

export default Hero
