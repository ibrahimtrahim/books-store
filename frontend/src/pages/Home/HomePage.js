import React from 'react'
import Hero from './components/Hero'
import LatestBooks from './components/LatestBooks'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'

const HomePage = () => {
  return (
    <main>
        <Hero />
        <LatestBooks />
        <Testimonials />
        <Faq />
    </main>
  )
}

export default HomePage