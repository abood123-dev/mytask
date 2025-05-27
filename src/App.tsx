import React, { CSSProperties } from 'react';
import { Link , useFetcher } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { HashRouter as Router , Routes , Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Create from './Create';
import Page2 from './Page2';
function App() {
  return (
    <>
    <Router>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Create' element={<Create/>} />
          <Route path='/page2' element={<Page2/>} />
       </Routes>
    </Router>
     </>
  );
}

export default App;
