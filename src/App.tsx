import React, { CSSProperties } from 'react';
import { Link , useFetcher } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { HashRouter as Router , Routes , Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
function App() {

  return (
    <>
    <Router>
       <Routes>
          <Route path='/' element={<Home/>} />
       </Routes>
    </Router>
     </>
  );
}

export default App;
