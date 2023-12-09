import React from 'react'
import Hero from './components/Hero'
import LatestBooks from './components/LatestBooks'
import Testimonials from './components/Testimonials'

const HomePage = () => {
  return (
    <main>
        <Hero />
        <LatestBooks />
        <Testimonials />
    </main>
  )
}

export default HomePage