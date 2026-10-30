import React from 'react'
import Header from '../Component/Header/Header'
import About from '../Component/About/About'
import Schools from '../Component/Schools/Schools'
import Features from '../Component/Features/Features'
import FAQs from '../Component/FAQs/FAQs'
import Contact from '../Component/Contact/Contact'
import Footer from '../Component/Footer/Footer'

import PatnerSchools from '../Component/PatnerSchools'
const LandingpageScreen = () => {
  return (
    <div>
      <Header />
      <About />
      <Schools />
      <Features />
      <FAQs />
      <Contact />
      <Footer />
      <PatnerSchools />
    </div>
  )
}

export default LandingpageScreen
