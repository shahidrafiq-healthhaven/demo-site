// import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import './assets/css/all.min.css';
import Home from './pages/Home.jsx'

function App() {

  return (
    <>
      <Header/>
        <Outlet />
      <Footer/>
    </>
  )
}

export default App
