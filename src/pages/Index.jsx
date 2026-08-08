import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ScrollProgress from '@/components/ScrollProgress'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import { Contact } from 'lucide-react'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'

export const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
    <ScrollProgress />
    <Navbar/>
    <Hero />
    <About />
    <Services />
    <Projects />
    <WhyChooseUs/>
    <Testimonials/>
    <Contact/>
    <Footer />
    <MobileCTA/>
    </div>
  )
}
