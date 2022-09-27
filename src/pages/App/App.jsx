import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../pages/HomePage/HomePage';
import SideBar from '../../components/SideBar/SideBar';


export default function App() {

  return (
    <main className="App">
      { 
        <>
          <div className="wrapper">
            <SideBar/>
            <div className="main">
              <NavBar/>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes> 
            </div>
          </div>
          
        </>
      }
    </main>
  );
}
