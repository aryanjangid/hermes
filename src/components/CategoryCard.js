import React from 'react'
import Button from './Button'
import classes from './categoryCard.module.css'

const CategoryCard = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardImg}>
                <img src={props.img} alt="background"></img>
            </div>
            <div className={classes.cardInfo}>
                <p className={classes.textTitle}>{props.name} </p>
                <p className={classes.textBody}>{props.description}</p>
                <h2 className={classes.textBody}><span>Avg Price </span>₹ {props.price}</h2>
            </div>
            <div className={classes.cardFooter}>
                <Button name="Check Now"/>
            </div></div>
    )
}

export default CategoryCard
