import React from 'react'
import classes from './hero.module.css'


const Hero = (props) => {
    return (
        <div className={classes.heroDiv} style={{ backgroundColor: '#f1f7f4', padding: '10rem' }}>
            <h1 >{props.name}</h1>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Hero
