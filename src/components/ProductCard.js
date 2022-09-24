import React from 'react'
import Button from './Button'
import classes from './productCard.module.css'

const ProductCard = (props) => {
    return (
        <div class={classes.card}>
            <div class={classes.cardImg}>
                <img src={props.image}></img>
            </div>
            <div class={classes.cardInfo}>
                <p class={classes.textTitle}>{props.name} </p>
                <p class={classes.textBody}>{props.description}</p>
                <h2 class={classes.textBody}>${props.price}</h2>
            </div>
            <div class={classes.cardFooter}>
                <Button name="Check Now" />
            </div>
        </div>
    )
}

export default ProductCard
