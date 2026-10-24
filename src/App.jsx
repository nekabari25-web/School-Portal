import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingpageScreen from './Screens/LandingpageScreen';
import PatnerSchools from '../src/Component/PatnerSchools';
import School from './Screens/School';
import "./App.css"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingpageScreen />}/>
                <Route path="/PatnerSchools" element={<PatnerSchools />}/>
                <Route path='/School' element={<School />}/>
      </Routes>
    </div>
  )
}

export default App
