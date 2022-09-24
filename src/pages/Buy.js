import React from 'react'
import { useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import { messCollection, houseCollection } from '../data'
import classes from './Buy.module.css'

const Buy = () => {

    const [Collection, setCollection] = useState(messCollection)

    return (
        <div className={classes.buy}>
            <div className={classes.btns}>
                <button onClick={() => setCollection(messCollection)}>buy from mess</button>
                <button onClick={() => setCollection(houseCollection)}>buy from household</button>
            </div>
            <div className={classes.list}>
                {Collection.map(col => {
                    return (
                        <div className={classes.child} >
                            <CategoryCard name={col.name} description={col.location} price={col.price} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Buy