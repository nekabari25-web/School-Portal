import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingpageScreen from './Screens/LandingpageScreen';
import FeaturesPage from './Screens/FeaturesPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingpageScreen />}/>
        <Route path="/FeaturesPage" element={<FeaturesPage />}/>
      </Routes>
    </div>
  )
}

export default App
