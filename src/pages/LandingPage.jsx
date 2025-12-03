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
            src={HeroImg}
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

