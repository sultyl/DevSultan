import React from 'react'
import './skill.css'
import {TbBrandReactNative} from 'react-icons/tb'
import {AiFillHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {IoLogoNodejs} from 'react-icons/io'
import {SiJquery} from 'react-icons/si'
import {IoLogoWordpress} from 'react-icons/io'
import {FaGitSquare} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {SiConfluence} from 'react-icons/si'
import {SiJira} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'
import {SiStyledcomponents} from 'react-icons/si'

const Skills = () => {
  return (
    <section id='skill' className='skill section container'>

      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">Skills
        <div className="underline"><span></span></div>
        </h5>
      </div>

    {/* Skills container */}
    <div className="skillsContainer grid">
    {/* single group of skills */}
    <div className="skillGroup">
      <div className="groupTitle">
        <h2 className="title">Front-end Development</h2>
        <span className="subTitle">
          3 Years Experience
        </span>
      </div>

      <div className="generalSkills">
      {/* single skill div */}
      <div className="singleSkill">
        <div className="iconBox flex">
          <TbBrandReactNative className='icon'/>
        </div>
        <span className="skillName">React</span>
      </div>
     
     <div className="singleSkill">
        <div className="iconBox flex">
          <IoLogoJavascript className='icon'/>
        </div>
        <span className="skillName">JavaScript</span>
      </div>

      <div className="singleSkill">
        <div className="iconBox flex">
          <AiFillHtml5 className='icon'/>
        </div>
        <span className="skillName"> HTML </span>
      </div>
      
             
      <div className="singleSkill">
        <div className="iconBox flex">
          <TbBrandCss3 className='icon'/>
        </div>
        <span className="skillName">CSS3</span>
      </div>
    
      <div className="singleSkill">
        <div className="iconBox flex">
          <SiTailwindcss className='icon'/>
        </div>
        <span className="skillName">tailwind</span>
      </div>

      <div className="singleSkill">
        <div className="iconBox flex">
          <TbBrandNextjs className='icon'/>
        </div>
        <span className="skillName">Next.js</span>
      </div>
      
      <div className="singleSkill">
        <div className="iconBox flex">
          <FaGitSquare className='icon'/>
        </div>
        <span className="skillName">Git</span>
      </div>
      
             
      <div className="singleSkill">
        <div className="iconBox flex">
          <AiOutlineGithub className='icon'/>
        </div>
        <span className="skillName">Github</span>
      </div>

      
      </div>

      </div>

      <div className="skillGroup">
      <div className="groupTitle">
        <h2 className="title">Other Skills</h2>
        <span className="subTitle">
          2 Years Experience
        </span>
      </div>

      <div className="generalSkills">
      {/* single skill div */}
      <div className="singleSkill">
        <div className="iconBox flex">
          <SiJquery className='icon'/>
        </div>
        <span className="skillName">JQuery</span>
      </div>
  
      <div className="singleSkill">
        <div className="iconBox flex">
          <IoLogoSass className='icon'/>
        </div>
        <span className="skillName">Sass</span>
      </div>
     
     <div className="singleSkill">
        <div className="iconBox flex">
          <SiConfluence className='icon'/>
        </div>
        <span className="skillName">Confluence</span>
      </div>

      <div className="singleSkill">
        <div className="iconBox flex">
          <SiJira className='icon'/>
        </div>
        <span className="skillName">Jira</span>
      </div>

      <div className="singleSkill">
        <div className="iconBox flex">
          <FaBootstrap className='icon'/>
        </div>
        <span className="skillName">Bootstrap</span>
      </div>
    
      <div className="singleSkill">
        <div className="iconBox flex">
          <IoLogoNodejs className='icon'/>
        </div>
        <span className="skillName">Nodejs</span>
      </div>
      
      <div className="singleSkill">
        <div className="iconBox flex">
          <SiMongodb className='icon'/>
        </div>
        <span className="skillName">MongoDB</span>
      </div>
      
      <div className="singleSkill">
        <div className="iconBox flex">
          <FaAws className='icon'/>
        </div>
        <span className="skillName">Aws</span>
      </div>
      
      <div className="singleSkill">
        <div className="iconBox flex">
          <SiStyledcomponents className='icon'/>
        </div>
        <span className="skillName">Styled Components</span>
      </div>
      
      </div>

      </div>

    </div>

    

    </section>
  )
}

export default Skills