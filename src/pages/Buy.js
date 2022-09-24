import React from 'react'
import { useState } from 'react'
import NormalButton from '../components/NormalButton'
import CategoryCard from '../components/CategoryCard'
import { messCollection, houseCollection } from '../data'
import classes from './Buy.module.css'

const Buy = () => {

    const [Collection, setCollection] = useState(messCollection)

    return (
        <div className={classes.buy}>
            <div className={classes.btns}>
                <div onClick={() => setCollection(messCollection)}>
                    <NormalButton name='buy from mess' />
                </div>
                <div onClick={() => setCollection(houseCollection)} >
                    <NormalButton name='buy from household' />
                </div>
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