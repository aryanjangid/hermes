import React from 'react'
import { useState } from 'react'
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
                            <p>{col.name}</p>
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