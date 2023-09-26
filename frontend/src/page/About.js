import React, { useEffect } from 'react'
import Footer2 from '../component/Footer2'
/*import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'*/
import pic2 from '../assest/images/pexels-keira-burton-6146970.jpg'
import pic3 from '../assest/images/pexels-anna-shvets-3962285.jpg'
import './Extrapages.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
       
       
        <div class="space1">
        </div>
        <section id="about-section">
            <div class="about-left">
                <img src={pic3} alt='product image' />
            </div>
            <div class="about-right">
                <h1 class="dark">About Us</h1>
                <p>Welcome to Vege Island - your ultimate online destination for fresh, high-quality groceries delivered straight to your door. Explore our lush selection of produce and pantry essentials, all while supporting local farmers and embracing a healthier lifestyle. Experience the convenience of shopping with nature's bounty at Vege Island today!
                </p>
                <div class="address">
                    <ul>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-paper-plane"></i>
                            </span>
                            <p>Address</p>
                            <span class="saprater">:</span>
                            <p>Jaipur, Rajasthan, India</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-phone-alt"></i>
                            </span>
                            <p>Phone No</p>
                            <span class="saprater">:</span>
                            <p>+91 987-654-xxxx</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="far fa-envelope"></i>
                            </span>
                            <p>Email ID</p>
                            <span class="saprater">:</span>
                            <p>curiouscoder@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div class="expertise">
                    <h3>Our Expertise</h3>
                    <ul>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-html5"></i>
                            </span>
                            <p>FAST DELIVERY</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-css3-alt"></i>
                            </span>
                            <p>Available 24/7 </p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-node-js"></i>
                            </span>
                            <p>FRESH PRODUCT</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-react"></i>
                            </span>
                            <p>Customer Interaction</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <div className='pgleft pgcommon'>
            <img src={pic2} alt="no image"/>
            <div>
                <h1>Our Story</h1>
                <p>Embarking on a journey rooted in a passion for quality and convenience, Vege Island was born. Founded by a group of food enthusiasts, our aim is to make fresh, locally sourced groceries accessible to all, while promoting sustainability. Join us in our mission to redefine grocery shopping and embrace a greener, healthier lifestyle on Vege Island.</p>

            </div>

        </div>
        <div className='pgright pgcommon'>
            <img src='https://www.veganfirst.com/media/editorimages/VEGGIES.jpg' alt='noimg' />

            <div>
                <h1>Who are we</h1>
                <p>We are a group of enthusiastic Computer Science students who founded Vege Island with a shared vision of making fresh and sustainable groceries available to everyone. Our tech-savvy approach, combined with our love for quality produce, drives us to create an exceptional online shopping experience for you. Welcome to Vege Island, where CS expertise meets fresh, wholesome goodness!</p>

            </div>
        </div>
        <Footer2 />
        </div>
  )
}

export default About