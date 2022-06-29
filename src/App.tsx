import React from 'react';
import './App.css';
import Home from './components/home'
import Banner from './components/banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './components/about';
import Thoughts from './components/thoughts';
import DnD from './components/dnd';
import Code from './components/code';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/thoughts" element={<Thoughts />}></Route>
          <Route path="/code" element={<Code />}></Route>
          <Route path="/dnd" element={<DnD />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
