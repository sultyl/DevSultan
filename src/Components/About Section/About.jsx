import React from 'react'
import './about.css'
import {TbCloudDownload} from 'react-icons/tb'
import img from '../../Assets/Ola.png'

const About = () => {
  return (
    <section id='about' className='about section container'>
      
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">About Me
        <div className="underline"><span></span></div>
        </h5>
      </div>


      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I am a success-driven, determined Front-end developer. I have experience using Html, Sass, tailwind and javaScript to build accessible component-based web pages and systems. <br/>
            Ability to deliver quality results while collaborating in rapidly changing work environments and team compositions.
              <br />
            I am passionate person willing to learn more technologies to become a better developer than I was yesterday. I am aadicted to meeting deadlines, determined, attentive to detail, an effective communicator and result oriented.
          </h4>

          <div className="aboutBtn">
            <a href="/SultanAdelekeResume.pdf" download="SultanAdeleke_Resume.pdf" className="flex">
              Download CV <TbCloudDownload className='icon'/>
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={img} alt="Adeleke Sultan" className="aboutImg"/>
        </div>
      </div>
    </section>
  )
}

export default About
