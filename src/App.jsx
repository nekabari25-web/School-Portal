import { Routes, Route } from 'react-router-dom';
import LandingpageScreen from './Screens/LandingpageScreen';
import FAQDetailScreen from './Screens/FAQDetailScreen';
import LoginPage from './Screens/LoginPage';
import RegistrationPage from './Screens/RegistrationPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingpageScreen />}/>
        <Route path="/FAQs/:slug" element={<FAQDetailScreen />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  )
}

export default App
