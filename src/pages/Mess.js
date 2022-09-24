import React from 'react'
import background from '../Assets/mess.webp'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
const Mess = () => {
    return (
        <div>
            <Hero name="Nana Shree Mess" title="Popular for matar paneer" background={background} />
            <ProductCard />
        </div>
    )
}

export default Mess
