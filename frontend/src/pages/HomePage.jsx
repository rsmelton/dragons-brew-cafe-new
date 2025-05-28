import React from 'react'
import '../assets/styles.css'
import dragonsBrewLogo from '../images/dragons-brew-logo.png'

const HomePage = () => {
  return (
    <div className='home-page-logo-container'>
      <img className='home-page-logo' src={dragonsBrewLogo} alt="Dragon's Brew Logo" />
    </div>
  )
}

export default HomePage