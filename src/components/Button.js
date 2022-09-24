import React from 'react'
import classes from './button.module.css'

const Button = (props) => {
    return (
        <button className={classes.cssbuttonsButton}> {props.name}
            <div className={classes.icon}>
                <img alt="background" src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png" />
            </div>
        </button>
    )
}

export default Button
