import React, { CSSProperties } from 'react';
import { Link , useFetcher } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { HashRouter as Router , Routes , Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Create from './Create';
function App() {

  return (
    <>
    <Router>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Create' element={<Create/>} />
       </Routes>
    </Router>
     </>
  );
}

export default App;
