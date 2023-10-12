import React from 'react'

import Brand from './../Brand/Brand';
import Navbar from '../Navbar/Navbar';
import Home from '../home/Home';
import Actions from '../actions/Actions';
import { Events } from 'react-scroll';
import Partners from './../partners/Partners';
import Footer from './../footer/Footer';
import About from './../about/About';
const main = () => {
  return (
    <>
      <Brand />
      <Navbar />
      <Home />
      <Actions />
      <About />
      <Events />
      <Partners />
      <Footer />
    </>
  )
}

export default main