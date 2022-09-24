import React from 'react'
import classes from './hero.module.css'


const Hero = (props) => {
    return (
        <div className={classes.heroDiv} style={{ backgroundImage: `url(${props.background})`, padding: '10rem' }}>
            <h1 style={{ color: 'white' }}>Nana Shree Mess</h1>
        </div>
    )
}

export default Hero
