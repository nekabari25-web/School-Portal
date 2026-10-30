import React from 'react'
import SchoolCarousel from '../Component/SchoolCarousel'
import Headers from "../Component/Header/Header"
import PatnerSchools from '../Component/PatnerSchools'
import Footer from '../Component/Footer/Footer'

const School = () => {
  return (
    <div>
      <Headers/>
      <PatnerSchools />
      <SchoolCarousel/>
      <Footer />
    </div>
  )
}

export default School
