import React, { useState } from "react";
import "../styles/authmodal.css";
import { userUser } from "../hooks/UseUser";


export default function AuthModal({ mode, onClose }) {
  const [isSignUp, setIsSignUp] = useState(mode === "signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const[error, setError] = useState('')

const {signIn, signUp} = userUser()

  const handleClose = ()=>{
    setEmail('')
    setPassword('')
    setName('')
    onClose()

  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(isSignUp ? "Sign Up" : "Sign In", { name, email, password });
    try {
      if (isSignUp){
        await signUp(name,email, password)
        alert("Account Created Successfully")


      }
      else{
        signIn(email,password)
        alert("Signed In Successfully")
      }
    } catch (error) {
      alert ('Error', error.message)
      setError(error)
      
      
    }
    onClose();
  };

  return (
    <div className="auth-overlay">
       <div className="auth-container" onClick={(e) => e.stopPropagation()}>
    {/* 👆 prevents closing when clicking *inside* */}
    <button className="close-btn" onClick={handleClose}>✕</button>
        <h2>{isSignUp ? "Create Your Account" : "Welcome Back 👋"}</h2>
        <p className="subtitle">
          {isSignUp
            ? "Join AlphaPrep and start mastering your tests today."
            : "Sign in to continue your learning journey."}
        </p>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="primary-btn modal-btn">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p
          className="switch-mode"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already have an account? Sign in"
            : "Don’t have an account? Sign up"}
        </p>
      </div>
    </div>
  );
}
