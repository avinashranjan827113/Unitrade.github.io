import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import Sell from './Pages/Sell/Sell';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Navbar from './components/Navbar';
import { useState } from 'react';
import './App.css'
const App = () => {
// function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <>
    <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/sell' element={<Sell/>}/>
          <Route path="/login" exact element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" exact element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
