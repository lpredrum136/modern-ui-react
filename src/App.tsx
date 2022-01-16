import React from 'react'
import './App.css'
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header
} from './containers'
import { Cta, Brand, Nav } from './components'

function App() {
  return (
    <div className="font-manrope">
      <div className="gradient__bg">
        <Nav />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
