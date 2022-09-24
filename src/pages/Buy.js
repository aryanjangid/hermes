import React from 'react'
import { useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import { messCollection, houseCollection } from '../data'

const Buy = () => {

    const [Collection, setCollection] = useState(messCollection)

    return (
        <div>
            <button onClick={() => setCollection(messCollection)}>buy from mess</button>
            <button onClick={() => setCollection(houseCollection)}>buy from household</button>
            <div>
                {Collection.map(col => {
                    if (Collection === messCollection) {
                        return (
                            <CategoryCard name={col.name} description={col.location} price={col.price} />
                        )
                    }
                    else {
                        return (
                            <p>
                                {col.name}
                            </p>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Buy