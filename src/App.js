import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import { Home } from "./screens/Home";
import { Rewards } from './screens/Home/Rewards';

const App = () => {
  return (

    <div>
       
   

    <BrowserRouter>
    
      <Routes>
        <Route exact path="/" element={<Home/>} />
        
        <Route path="/rewards" element={<Rewards/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;