import React from 'react'
import { Route, Routes, useNavigate } from 'react-router';
import Button from '../components/Button'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => navigate('/buy')}>buy</Button>
      <Button onClick={() => navigate('/sell')}>sell</Button>
    </div>
  )
}

export default Home
