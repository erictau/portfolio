import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../pages/HomePage/HomePage'


export default function App() {

  return (
    <main className="App">
      { 
        <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
      }
    </main>
  );
}
