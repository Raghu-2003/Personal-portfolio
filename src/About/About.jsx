import React from 'react'
import './About.css'
import profile_img from '../assets/passphoto_graph.jpg'
import theme_pattern from '../assets/pattern-theme.webp'

const About =()=> {
  return (
    
      <div id='about' className="about">
        <div className="about-title">
            <h1>About me</h1>
           {/* <img src={theme_pattern} alt=""  style={{height:"10px",width:"400px" }}/> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
             <img src={profile_img} alt="" style={{height:"500px",width:"400px"}} />
            </div>
            <div className="about-right">
                <div className="about-para">
                  <p>I am an experience Frontend Developer with over a decade of professional experice in the field. Throughout my carrer, I have had privilege of collaborating with prestigious organizations,constributtin to their success and growth.</p>
                    <p>My passsion for frontend development is not only reflected in my experience but also in the enthusuasm adn didication I bring to each project.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML&CSS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>REACT.JS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JAVASCRIPT</p> <hr style={{width:"40%"}} /></div>
                    <div className="about-skill"><p>NODE.JS</p> <hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
              <hr/>
              <div className="about-achievement">
                <h1>1+</h1>
                <p>PROJECT COMPLITED</p>
              </div>
              <hr/>
              <div className="about-achievement">
                <h1>2+</h1>
                <p>HAPPY CLIENTS</p>
              </div>
        </div>
      </div>
    
  )
}

export default About
