import React from 'react';
import './More.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Courses />
      <Features />
      <Testimonials />
      <Mentors />
      <Newsletter />
      <Footer />
    </div>
  );
}

// ---------------- Navbar ----------------
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Coursespace</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Courses</li>
        <li>Testimonial</li>
        <li>Mentor</li>
      </ul>
      <div className="nav-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
}

// ---------------- Hero ----------------
function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Improve your Skill with Different Way</h1>
        <p>Access courses and learn from expert mentors anytime, anywhere.</p>
        <div className="hero-buttons">
          <button>Get Started</button>
          <button>Watch Video</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/500x400" alt="hero" />
      </div>
    </section>
  );
}

// ---------------- Stats ----------------
function Stats() {
  return (
    <section className="stats">
      <div className="stat-item">
        <h2>1000+</h2>
        <p>Students</p>
      </div>
      <div className="stat-item">
        <h2>50+</h2>
        <p>Certified Courses</p>
      </div>
      <div className="stat-item">
        <h2>20+</h2>
        <p>Expert Mentors</p>
      </div>
      <div className="stat-item">
        <h2>5+</h2>
        <p>Years Experience</p>
      </div>
    </section>
  );
}

// ---------------- Courses ----------------
function Courses() {
  const courseList = [
    { title: 'Web Development', price: '$50', img: 'https://via.placeholder.com/200x150' },
    { title: 'Data Science', price: '$60', img: 'https://via.placeholder.com/200x150' },
    { title: 'UI/UX Design', price: '$40', img: 'https://via.placeholder.com/200x150' },
  ];

  return (
    <section className="courses">
      <h2>Most Popular Courses</h2>
      <div className="course-grid">
        {courseList.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------- Features ----------------
function Features() {
  const features = ['Easy Accessible', 'Affordable', 'Flexible Study Time', 'Certificate'];
  return (
    <section className="features">
      <h2>Why Choose Coursespace</h2>
      <div className="feature-grid">
        {features.map((feature, i) => (
          <div className="feature-item" key={i}>{feature}</div>
        ))}
      </div>
    </section>
  );
}

// ---------------- Testimonials ----------------
function Testimonials() {
  const reviews = [
    { name: 'Ali', text: 'Great platform for learning!' },
    { name: 'Sara', text: 'Mentors are very helpful.' },
    { name: 'Hamza', text: 'Courses are affordable and high quality.' },
  ];
  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-grid">
        {reviews.map((r, i) => (
          <div className="testimonial-item" key={i}>
            <p>“{r.text}”</p>
            <h4>- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------- Mentors ----------------
function Mentors() {
  const mentors = [
    { name: 'John Doe', skill: 'Web Development', img: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', skill: 'Data Science', img: 'https://via.placeholder.com/150' },
  ];
  return (
    <section className="mentors">
      <h2>Meet Our Mentors</h2>
      <div className="mentor-grid">
        {mentors.map((m, i) => (
          <div className="mentor-item" key={i}>
            <img src={m.img} alt={m.name} />
            <h4>{m.name}</h4>
            <p>{m.skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------- Newsletter ----------------
function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

// ---------------- Footer ----------------
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Coursespace. All rights reserved.</p>
      <div className="social-icons">
        <span>FB</span>
        <span>IG</span>
        <span>TW</span>
      </div>
    </footer>
  );
}

export default App;
