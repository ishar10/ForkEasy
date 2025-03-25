import './App.css';
import React from 'react';
import Home from './Home';
import Flask from './Flask';
import Friends from './Friends';
import Groups from './Groups';

import {
  BrowserRouter as Router ,
  Routes,
  Route
} from "react-router-dom";
import Activity from './Activity';
function App() {
  return (
    <>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
     <Router>
     <Routes>
     <Route path='/home' element={<Home/>} />
     <Route path='/groups' element={<Groups/>} />
      <Route path='/friends' element={<Friends/>} />
      <Route path='/activity' element={<Activity/>} />
        </Routes>
        </Router>
    </>
   
  );
}

export default App;