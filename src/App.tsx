import React, { CSSProperties } from 'react';
import { Link , useFetcher } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { HashRouter as Router , Routes , Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Create from './Create';
import Page2 from './Page2';
import Login from './Login';
import ScrollToTop from './SrollToTop';
function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Create' element={<Create/>} />
          <Route path='/page2' element={<Page2/>} />
          <Route path='/login' element={<Login/>} />
       </Routes>
    </Router>
     </>
  );
}

export default App;
