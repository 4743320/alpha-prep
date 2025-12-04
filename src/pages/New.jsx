import React, { useState, useContext } from "react";
import '../styles/new.css'
import TestLogos from "../components/TestLogos";
import AuthModal from "../components/AuthModal";
import { UserContext } from "../Context/UserContext";
import { userUser } from "../hooks/UseUser";
import CourseCard from '../components/CourseCard'
import IELTSLogo from "../assets/ieltslogo2.png"
import SATLogo from "../assets/sat.png";
import HeroImg from '../assets/Pics/hero.png'
import TOEFLIImg from '../assets/Pics/toefl.gif'
import { useNavigate } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import TrackProgress from "../assets/Pics/TrackProgress.jpg"
import SmartPractice from"../assets/Pics/SamrtPractice.jpg"
import FreeResources from "../assets/Pics/FreeResources.jpg"
import AlphaPrepLogo from '../assets/Pics/ALPHAPREPNEW.png'
import "../styles/navbar.css"

const New = () => {
      const [showModal, setShowModal] = useState(false)
      const [modalMode, setModalMode] = useState("signin")
    
      const{user, logOut} = userUser()

      const navigate = useNavigate()
  return (
    <div>
      <div >
  <section className="hero-section" style={{backgroundColor:"white"}}>
  <div className="container">
    <div className="hero-grid">
      <div className="hero-text">
        {/* <p class="subtitle">A social media for learners</p> */}
        <TestLogos/>
        <h2 className="title">Study Smarter, Score Higher</h2>
        <p className="description">Get exam-ready with <b><i>Free Official Practice Tests and Expert Study Resources</i></b> .
We offer Proficiency Tests, Aptitude Tests, and accredited Professional Diplomas & Certifications — all designed to help you learn smarter and score higher.
Study at your own pace with trusted material, helpful guidance, and a learning path built just for you.
.</p>
        {/* <a href="#" class="cta-button">Join for free</a> */}
          <div className="hero-buttons">
            <button className="primary-btn" onClick={()=>{navigate("/main-dash")}}>Get Started</button>
            <button className="primary-btn">Learn More</button>
          </div>
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt="Hero" />
      </div>
    </div>
  </div>
</section>
<div className="container-course">
      <div className="course-row">
   <CourseCard imageUrl={IELTSLogo} title={"IELTS ACADEMIC / GENERAL"} category={"IELTS TESTS FOR ENGLISH LANGUAGE PROFICIENCY"}
   level="START LEARNING" level2={"PROFICIENCY TEST"} path={"/ielts-dash"}/>
      <CourseCard imageUrl={SATLogo} title={"DIGITAL SAT"} category={"DIGITAL SAT FOR UNIVERSITY ADMISSION/ ENTRY TEST"}
   level="START LEARNING" level2={"APTITUTE TEST"} path={"/sat-dash"}/>
         {/* <CourseCard imageUrl={TOEFLIImg} title={"TOEFL - IBT"} category={"TOEFL TEST FOR ENF+GLISH PROFICIENCY"}
   level="START LEARNING" level2={"PROFICIENCY TEST"}/> */}

</div>

  </div>
</div>

 <section className="features" id="features">
 
 
{/* <img src={AlphaPrepLogo} className=""/> */}
        <h2>Why Choose Alpha Prep ?</h2>
         <div className="container-course" >
           <div className="feature-grid">
        <FeatureCard title={"Smart Practice"} description={"Get expertly curated practice tests and Official Resourc Material that adapt to your skill level."}
        imageUrl={SmartPractice}/>
         <FeatureCard title={"Free Resources"} description={"Our efficient practice tests give you detailed analysis and tips after every test attempt."}
        imageUrl={FreeResources}/>
         <FeatureCard title={"Track Progress"} description={" Visualize your score improvements and focus on the areas that matter most."}
        imageUrl={TrackProgress}/>  
        </div>
         </div>
       
       
      </section>

      {/* About Section */}
      <section className="about" id="about">
       
        <div className="about-content">
          <h2>Built for Serious Learners</h2>
          <p>
            Aplha-Prep is a one-stop solution for students and Professionals aiming to achieve their dream scores all at a FREE and Economical price.
            Whether you're preparing for English Proficiency tests such as IELTS,PTE, DUOLingo, TOEFL, or for University Enterance and Apttute tests like Digital-SAT and ECAT, our platform provides structured
            practice, insights, and motivation to keep you moving forward. Aplha-Prep offers extensive courses for TEFL and ELT for Tachers wishing to teach various english courses as well as C & C2 Certifications. Our professional Courses are accredited and acceptable by various governing bodies
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} PrepMaster — All rights reserved. Contact : 0313-4743320</p>
      </footer>
    </div>


  )
}

export default New




