import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/buy')}>buy</button>
      <button onClick={() => navigate('/sell')}>sell</button>
    </div>
  )
}

export default Home
