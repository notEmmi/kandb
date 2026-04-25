import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='app'>

        {/* Top Navigation */}
        <div clasName='top-nav'>

          <div className='logo'>
            <h1>K & B</h1>
          </div>
          
          <div className='nav-links'>
            <a href='#'>Home</a>
            <a href='#'>Services</a>
            <a href='#'>About Us</a>
            <a href='#'>Contact</a>
          </div>

        </div>
        {/* End Top Navigation */}

        {/*  */}
        <div className='main'>

          {/* Hero Section */}
          <div className='hero'>
            <h1>Meticulous care for <i>your finest garments</i></h1>
            <p>Where precision meets elegance. Trusted by discerning clients to preserve and restore their most valued clothing.</p>
            
            <button className='btn'>Request More Info</button>

          </div>
          {/* End Hero Section */}

          {/* Services Section */}
          <div className='services'>
              <h2>Our Services</h2>
              <h1>What We Offer</h1>
              <p>Quality care for every garment. All prices are starting rates and may vary based on fabric type, embellishments, and specific requirements.</p>
              
              {/* Service Navigation */}
              <div clasName="service-nav">
                <div className='service-nav-item'>
                  <h3>Dry Cleaning</h3>
                  <p>Expert care for delicate fabrics, ensuring your garments are impeccably cleaned and preserved.</p>
                </div>
                
                <div className='service-nav-item'>
                  <h3>Alterations</h3>
                  <p>Precision tailoring to ensure the perfect fit, enhancing the comfort and style of your clothing.</p>
                </div>

                <div className='service-nav-item'>
                  <h3>Specials</h3>
                  <p>Exclusive offers and seasonal promotions to provide exceptional value for our discerning clients.</p>
                </div>

              </div>
              {/* End Service Navigation */}

            </div>
            {/* End Services Section */}

            {/* Contact Section */}
            <div className='contact'>
              <h2>Contact Us</h2>
              <h1>Get in Touch</h1>
              <p>Have questions or need assistance? Our team is here to help. Reach out to us for personalized support and expert advice.</p>

              <button className='btn'>Contact Us</button>

            </div>
            {/* End Contact Section */}
          </div>
          {/* End Main Content */}

      </div>
  )
}

export default App
