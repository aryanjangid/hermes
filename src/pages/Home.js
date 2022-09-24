import React from 'react'
import { Route, Routes, useNavigate } from 'react-router';

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
