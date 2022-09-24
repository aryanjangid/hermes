import './App.css';
import { Route, Routes} from 'react-router';
import Home from './pages/Home'
import Auth from './pages/Auth';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Mess from './pages/Mess';
// import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  // const [In, setIn] = useState(null)
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/auth' element={<Auth />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/buy' element={<Buy />} />
        <Route exact path='/sell' element={<Sell />} />
        <Route exact path='/mess' element={<Mess />} />
        <Route exact path='*' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
