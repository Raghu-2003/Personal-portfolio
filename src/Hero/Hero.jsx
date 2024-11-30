import React from 'react'
import './Hero.css'
import profile_png from '../assets/passphoto_graph.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () =>{
  return (
    <div id='home' className="hero">
        <img  src={profile_png} alt = "" style={{width:'200px',height:'200px',borderRadius:'100px'}}/>
        
        <h1><span>I'm Raghu,</span> frontend developer based in Hyderabad.</h1>
        <p>I am frontend developer from Hyderabad</p>
        <div className="hero-action">
            <div><AnchorLink  className="hero-connect" href='#contact'onClick={() => setMenu("contact")} >Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            
        </div>
      
    </div>
  );
}

export default Hero
