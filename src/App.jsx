// import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import './assets/css/all.min.css';
import Home from './pages/Home.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header/>
        <Outlet />
      <Footer/>

      <ToastContainer position="top-right" autoClose={3000}   className="custom-toast-container"/>
    </>
  )
}

export default App
