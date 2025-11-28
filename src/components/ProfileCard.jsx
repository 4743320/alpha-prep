//     <aside className="dashboard-sidebar">
//     <div className="profile-card-mini">
//   <img
//     src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(
//       user?.name || "User"
//     )}`}
//     className="avatar-mini"
//     alt="avatar"
//   />

//   <div className="profile-text-mini">
//     <span className="name-mini">Welcome, {user?.name || "User"}</span>
//     <span className="role-mini">IELTS Aspirant</span>
//   </div>
// </div>
//           <div className="progress-card">
//             <h4>Your Progress</h4>
//             <div className="progress-bar">
//               <div className="progress-fill" style={{ width: "65%" }}></div>
//             </div>
//             <p>65% Overall Mastery</p>
//           </div>

//           <button className="primary-btn full-width">View Score History</button>
//         </aside>

import React, { useState, useEffect } from "react";

const SidebarWithTopBar = ({ user }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // Mobile top row
    return (
      <div className="dashboard-topbar">
        <div className="topbar-profile">
          <img
            src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(
              user?.name || "User"
            )}`}
            className="avatar-mini"
            alt="avatar"
          />
          <span className="name-mini">{user?.name || "User"}</span>
        </div>
        <button className="primary-btn topbar-btn">View Score History</button>
      </div>
    );
  }

  // Desktop sidebar
  return (
    <aside className="dashboard-sidebar">
      <div className="profile-card-mini">
        <img
          src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(
            user?.name || "User"
          )}`}
          className="avatar-mini"
          alt="avatar"
        />
        <div className="profile-text-mini">
          <span className="name-mini">Welcome, {user?.name || "User"}</span>
          <span className="role-mini">Test Aspirant</span>
        </div>
      </div>

      <div className="progress-card">
        <h4>Your Progress</h4>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `65%` }}></div>
        </div>
        <p>65% Overall Mastery</p>
      </div>

      <button className="primary-btn full-width">View Score History</button>
    </aside>
  );
};

export default SidebarWithTopBar;
