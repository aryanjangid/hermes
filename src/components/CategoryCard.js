import React from 'react'
import Button from './Button'
import classes from './categoryCard.module.css'

const CategoryCard = (props) => {
    return (
        <div class={classes.card}>
            <div class={classes.cardImg}>
                <img src={props.image}></img>
            </div>
            <div class={classes.cardInfo}>
                <p class={classes.textTitle}>{props.name} </p>
                <p class={classes.textBody}>{props.description}</p>
                <h2 class={classes.textBody}><span>Avg Price </span>₹ {props.price}</h2>
            </div>
            <div class={classes.cardFooter}>
                <Button name="Check Now"/>
            </div></div>
    )
}

export default CategoryCard
