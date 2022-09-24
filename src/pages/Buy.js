import React from 'react'
import { useState } from 'react'
import NormalButton from '../components/NormalButton'
import CategoryCard from '../components/CategoryCard'
import { messCollection, houseCollection } from '../data'
import classes from './Buy.module.css'
import { useNavigate } from 'react-router-dom'

const Buy = () => {
    const navigate = useNavigate()
    const [Collection, setCollection] = useState(messCollection)

    return (
        <>
        <div className={classes.buy}>
            <div className={classes.btns}>
                <div onClick={() => setCollection(messCollection)}>
                    <NormalButton name='Order From Mess' />
                </div>
                <div onClick={() => setCollection(houseCollection)} >
                    <NormalButton name='Order From Household' />
                </div>
            </div>
            <div className={classes.list}>
                {Collection.map((col,i) => {
                    if (Collection === messCollection) {
                        return (
                            <div className={classes.child} onClick={() => navigate('/mess')} >
                                <CategoryCard key={i} name={col.name} description={col.location} price={col.price} img={col.img}/>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className={classes.child} >
                                <CategoryCard key={i} name={col.name} description={col.item} price={col.price} img={col.img}/>
                            </div>
                        )
                    }

                })}
            </div>
        </div>
        </>
    )
}

export default Buy