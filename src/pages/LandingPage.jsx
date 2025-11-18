import React, { useState, useContext } from "react";
import "../styles/landingpage.css";
import TestLogos from "../components/TestLogos";
import AuthModal from "../components/AuthModal";
import { UserContext } from "../Context/UserContext";
import { userUser } from "../hooks/UseUser";


export default function LandingPage() {
  const [showModal, setShowModal] = useState(false)
  const [modalMode, setModalMode] = useState("signin")

  const{user, logOut} = userUser()

  return (
    <div className="landing-page">
      {/* Navbar */}
      {/* <nav className="navbar">
        <div className="logo" src='/assets/'>Alpha Prep</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        <div className="auth-btn">
  {user ? (
    <div className="user-info">
      <img
        src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(user.name)}`}
        alt="User Avatar"
        className="user-avatar"
      />
      <span className="user-name">{user.name}</span>
      <button className="nav-btn" onClick={logOut}>Log Out</button>
    </div>
  ) : (
    <>
      <button className="nav-btn" onClick={() => {
        setModalMode('signin');
        setShowModal(true);
      }}>Sign In</button>

      <button className="nav-btn" onClick={() => {
        setModalMode('signup');
        setShowModal(true);
      }}>Sign Up</button>
    </>
  )}
</div>

         
        </div>
      </nav> */}
        {/* Show Auth Modal */}
      {/* {showModal && (
        <AuthModal
          mode={modalMode}
          onClose={() => setShowModal(false)} // 👈 closes modal
        />
      )} */}

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
      <TestLogos/>
          <h1>Master Tests With Confidence</h1>
          <p>
            Unlock your full potential with a vast collection practice tests, real-time feedback,
            and personalized learning paths designed to help you succeed.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/30/07/51/school-2692527_1280.png"
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
