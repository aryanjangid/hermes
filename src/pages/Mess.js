import React from 'react'
import background from '../Assets/mess.webp'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { Thali } from '../data'
const Mess = () => {
    return (
        <div>
            <Hero name="Nana Shree Mess" title="Popular for matar paneer" background={background} />

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '5rem 0' }}>
                {Thali.map((mess, i) => (
                    <ProductCard name={mess.name} item={mess.item} price={mess.price} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Mess
