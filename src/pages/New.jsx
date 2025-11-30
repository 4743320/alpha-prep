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


const New = () => {
      const [showModal, setShowModal] = useState(false)
      const [modalMode, setModalMode] = useState("signin")
    
      const{user, logOut} = userUser()
    
  return (
<div>
  <section className="hero-section">
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
            <button className="primary-btn">Get Started</button>
            <button className="primary-btn">Learn More</button>
          </div>
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt="Hero" />
      </div>
    </div>
  </div>
</section>

</div>

  )
}

export default New




