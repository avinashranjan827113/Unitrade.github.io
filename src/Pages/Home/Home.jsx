import React from 'react'
import HeroSection from '../../components/HeroSection'
import Electronics from '../../components/Electronics'
import AllCategories from '../../components/AllCategories'
import Vehicles from '../../components/Vehicles'
// import Team from '../../components/Team'
import Footer from '../../components/Footer'
import Calculators from '../../components/Calculators'
import TestimonialSlider from '../../components/Testimonials'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <AllCategories/>
      <Electronics/>
      <Vehicles/>
      <Calculators/>
      <TestimonialSlider/>
      <Footer/>
    </>
  )
}

export default Home
