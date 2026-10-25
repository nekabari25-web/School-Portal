import { Routes, Route } from 'react-router-dom';
import LandingpageScreen from './Screens/LandingpageScreen';
import FeaturesPage from './Screens/FeaturesPage';
import FAQDetailScreen from './Screens/FAQDetailScreen';
import LoginPage from './Screens/LoginPage';
import RegistrationPage from './Screens/RegistrationPage';
import ContactUS from './Screens/ContactUS/ConctactUS';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingpageScreen />}/>
        <Route path="/FeaturesPage" element={<FeaturesPage />}/>
        <Route path="/FAQs/:slug" element={<FAQDetailScreen />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Registration" element={<RegistrationPage />} />
        <Route path="/ContactUs" element={<ContactUS />} />
      </Routes>
    </div>
  )
}

export default App
