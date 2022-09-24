import React from 'react'
<<<<<<< HEAD
=======
import { Route, Routes, useNavigate } from 'react-router';
import Mess from './Mess';
>>>>>>> 52a6c9fa48abdeb1efc371c89dfdd8693d759215

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/buy')}>buy</button>
      <button onClick={() => navigate('/sell')}>sell</button>
      <Mess/>
    </div>
  )
}

export default Home
