import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingpageScreen from './Screens/LandingpageScreen';
import PatnerSchools from '../src/Component/PatnerSchools';
import School from './Screens/School';
import SchoolCarousel from '../src/Component/SchoolCarousel';

import "./App.css"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingpageScreen />}/>
                <Route path="/PatnerSchools" element={<PatnerSchools />}/>
                <Route path='/School' element={<School />}/>
                <Route path='/SchoolCarousel' element={<SchoolCarousel />}/>
                
      </Routes>
    </div>
  )
}

export default App
