import './App.css';
import { Route, Routes, Navigate } from 'react-router';
import Home from './pages/Home'
import Auth from './pages/Auth';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/auth' element={<Auth />} />
        <Route exact path='/buy' element={<Buy />} />
        <Route exact path='/sell' element={<Sell />} />
      </Routes>
    </>
  );
}

export default App;
