import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


import Features from './pages/features';
import Demo from './pages/demo';
import Technologies from './pages/Technologies';
import SignUp from './pages/signup';
import Login from './pages/login';
  
function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/' exact element={<Navbar/>}/>
        <Route path='/Features' exact element={<Features/>} />
        <Route path='/demo' exact element={<Demo/>} />
        <Route path='/team' exact element={<Technologies/>} />
        <Route path='/signup' exact element={<SignUp/>} />
        <Route path='/login' exact element={<Login/>} />
      </Routes>
      
    </BrowserRouter>
  );
}
  
export default App;