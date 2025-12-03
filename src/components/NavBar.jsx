// import React from 'react'
// import '../styles/landingpage.css'
// import AuthModal from './AuthModal'
// import { userUser } from '../hooks/UseUser'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'


// const NavBar = () => {
    
//   const [showModal, setShowModal] = useState(false)
//   const [modalMode, setModalMode] = useState("signin")
//   const [menuOpen, setMenuOpen] = useState(false)

//   const{user, logOut} = userUser()


//   return (
//     <>
//     <nav className="navbar">
//             <div className="logo" src='/assets/'>Alpha Prep</div>
//             {/* {Hamburger} */}
//             <div className={`hamburger ${menuOpen ? 'active' :''}`}
//             onClick={()=>setMenuOpen(!menuOpen)}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>

//             <div className={`nav-links${menuOpen ? 'open' : ''}`}>
//               {/* <a href="#home" >Home</a>
//               <a href="#features">Features</a>
//               <a href="#about">About</a> */}
//  <div className="nav-links">
//     <Link to="/">Home</Link>
//     <Link to="/sat-dash">SAT</Link>
//     {/* <Link to="/">About</Link> */}
//     <a href="#features">Features</a>
//               <a href="#about">About</a>
//   </div>

//             <div className="auth-btn">
//       {user ? (
//         <div className="user-info">
//           <img
//             src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(user.name)}|| "U"` }
//             alt="User Avatar"
//             className="user-avatar"
//           />
//           <span className="user-name">{user.name}</span>
//           <button className="nav-btn" onClick={logOut}>Log Out</button>
//         </div>
//       ) : (
//         <>
//           <button className="nav-btn" onClick={() => {
//             setModalMode('signin');
//             setShowModal(true);
//           }}>Sign In</button>
    
//           <button className="nav-btn" onClick={() => {
//             setModalMode('signup');
//             setShowModal(true);
//           }}>Sign Up</button>
//         </>
//       )}
//     </div>
    
             
//             </div>
//           </nav>
//             {/* Show Auth Modal */}
//           {showModal && (
//             <AuthModal
//               mode={modalMode}
//               onClose={() => setShowModal(false)} // 👈 closes modal
//             />
//           )}
// </>
    
//   )
// }

// export default NavBar

import React, { useState } from 'react';
import '../styles/navbar.css';
import AuthModal from './AuthModal';
import { userUser } from '../hooks/UseUser';
import { Link, useNavigate } from 'react-router-dom';
import AlphaPrepLogo from '../assets/Pics/ALPHAPREPNEW.png'
const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('signin');
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logOut } = userUser();

  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar">
        {/* <div className="logo">Alpha Prep</div> */}
    <Link to="/" onClick={()=>{navigate("/")}}>        <div className="logo">
  <img src={AlphaPrepLogo} alt="Logo" className="nav-logo" />
</div></Link>          


<div className="nav-center">
   {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        
 <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link to="/main-dash" onClick={() => setMenuOpen(false)}>Courses</Link>
    <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    {/* <Link to="/ielts-dash" onClick={() => setMenuOpen(false)}>Features</Link> */}
    {/* <Link to="/new" onClick={() => setMenuOpen(false)}>New</Link> */}
    
          
           <div className="auth-wrapper">
    {user ? (
      <div className="user-info">
        <img
          src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(user.name)}||U`}
          alt="User Avatar"
          className="user-avatar"
        />
        <span className="user-name">{user.name}</span>
        <button className="nav-btn" onClick={logOut}>Log Out</button>
        <button className="profile-btn" onClick={()=>{navigate('/profile')}} >Profile</button>
      </div>
    ) : (
      <div className="auth-btn">
        <button className="nav-btn" onClick={() => { setModalMode('signin'); setShowModal(true); }}>Sign In</button>
        <button className="nav-btn" onClick={() => { setModalMode('signup'); setShowModal(true); }}>Sign Up</button>
      </div>
    )}
  </div>
        </div>
</div>
       
      </nav>

      {/* Auth Modal */}
      {showModal && (
        <AuthModal
          mode={modalMode}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default NavBar;