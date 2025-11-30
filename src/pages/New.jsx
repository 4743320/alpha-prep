// import React from 'react'
// import '../styles/new.css'

// const New = () => {
//   return (
// <div class="bg-white">
//     <header class="bg-[#FCF8F1] bg-opacity-30">
//         <div class="px-4 mx-auto sm:px-6 lg:px-8">
//             <div class="flex items-center justify-between h-16 lg:h-20">
//                 <div class="flex-shrink-0">
//                     <a href="#" title="" class="flex">
//                         <img class="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
//                     </a>
//                 </div>

//                 <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
//                     {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
//                     <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
//                     </svg>

//                     {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
//                     <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
//                     </svg>
//                 </button>

//                 <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
//                     <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Features </a>

//                     <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Solutions </a>

//                     <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Resources </a>

//                     <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Pricing </a>
//                 </div>

//                 <a href="#" title="" class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button"> Join Now </a>
//             </div>
//         </div>
//     </header>

//   <section class="hero-section">
//   <div class="container">
//     <div class="hero-grid">
//       <div class="hero-text">
//         <p class="subtitle">A social media for learners</p>
//         <h1 class="title">Connect & learn from the experts</h1>
//         <p class="description">Grow your career fast with the right mentor.</p>
//         <a href="#" class="cta-button">Join for free</a>
//       </div>
//       <div class="hero-image">
//         <img src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="Hero" />
//       </div>
//     </div>
//   </div>
// </section>

// </div>

//   )
// }

// export default New


import React, { useState, useContext } from "react";
import "../styles/newlanding.css";
import TestLogos from "../components/TestLogos";
import AuthModal from "../components/AuthModal";
import { UserContext } from "../Context/UserContext";
import { userUser } from "../hooks/UseUser";
import CourseCard from '../components/CourseCard'
import IELTSLogo from "../assets/ieltslogo2.png"
import SATLogo from "../assets/sat.png";
import HeroImg from '../assets/Pics/hero.png'

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false)
  const [modalMode, setModalMode] = useState("signin")

  const{user, logOut} = userUser()

  return (
    <div className="landing-page">
    
      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
      <TestLogos/>
          <h1>Study Smarter, Score Higher</h1>
          <p>
Get exam-ready with <b><i>Free Official Practice Tests and Expert Study Resources</i></b> .
We offer Proficiency Tests, Aptitude Tests, and accredited Professional Diplomas & Certifications — all designed to help you learn smarter and score higher.
Study at your own pace with trusted material, helpful guidance, and a learning path built just for you.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
            alt="Students preparing for exams"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Why Choose PrepMaster?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Smart Practice</h3>
            <p>
              Get expertly curated practice tests and Official Resourc Material that adapt to your skill level.
            </p>
          </div>
          <div className="feature-card">
            <h3>Instant Feedback</h3>
            <p>
              Our efficient practice tests give you detailed analysis and tips after every test attempt.
            </p>
          </div>
          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>
              Visualize your score improvements and focus on the areas that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <CourseCard/>
        <div className="about-content">
          <h2>Built for Serious Learners</h2>
          <p>
            PrepMaster is a one-stop solution for students aiming to achieve their dream scores.
            Whether you're preparing for IELTS, SAT, PTE, DUOLingo, TOEFL & ECAT, our platform provides structured
            practice, insights, and motivation to keep you moving forward.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} PrepMaster — All rights reserved. Contact : 0313-4743320</p>
      </footer>
    </div>
  );
}
