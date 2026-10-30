import { Routes, Route } from 'react-router-dom';
import LandingpageScreen from './Screens/LandingpageScreen';
import FeaturesPage from './Screens/FeaturesPage';
import FAQDetailScreen from './Screens/FAQDetailScreen';
import LoginPage from './Screens/LoginPage';
import RegistrationPage from './Screens/RegistrationPage';
import ContactUS from './Screens/ContactUS/ConctactUS';
import About from './Screens/About';
import PatnerSchools from '../src/Component/PatnerSchools';
import School from './Screens/School';
import SchoolCarousel from '../src/Component/SchoolCarousel';

import "./App.css"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingpageScreen />}/>
        <Route path="/FeaturesPage" element={<FeaturesPage />}/>
        <Route path="/FAQs" element={<FAQDetailScreen />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Registration" element={<RegistrationPage />} />
        <Route path="/ContactUs" element={<ContactUS />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/PatnerSchools" element={<PatnerSchools />}/>
        <Route path='/School' element={<School />}/>
        <Route path='/SchoolCarousel' element={<SchoolCarousel />}/>
      </Routes>
    </div>
  )
}

export default App
