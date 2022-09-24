import React from 'react'
import classes from './hero.module.css'


const Hero = (props) => {
    return (
        <div className={classes.heroDiv} style={{ backgroundImage: `url(${props.background})`, padding: '10rem' }}>
            <h1 >{props.name}</h1>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Hero
