import React, { useState } from "react";
import { userUser } from "../hooks/UseUser";
import CategoryCard from "../components/CategoryCard";
import "../styles/satdashboard.css";
import { useNavigate } from "react-router-dom";
import SATLogo from "../assets/sat.png";

const SatDashboard = () => {
  const { user } = userUser();
  const [activeTab, setActiveTab] = useState("Official Mock Tests");
  const navigate = useNavigate()
  // const handleNavigate=()=>{
  //   navigate('/k-start-screen')
  // }

  const categories = [
    { name: "Official KAPLAN MOCK TEST", desc: "4- Sections Reading & Writing & Maths", color: "#60a5fa" , onClick: ()=>navigate('/k-start-screen')},
    { name: "Official PRINCETON MOCK TEST", desc:"4- Sections Reading & Writing & Maths", color: "#60a5fa" , onClick: ()=>navigate('/p-start-screen')},
    { name: "Reading", desc: "52 Questions", color: "#60a5fa" },
    { name: "Writing & Language", desc: "44 Questions", color: "#60a5fa" },
  ];

  const tabs = ["Official Mock Tests", "SAT Practice", "Resources"];

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Sidebar */}
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
    <span className="role-mini">SAT Aspirant</span>
  </div>
</div>


          <div className="progress-card">
            <h4>Your Progress</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "65%" }}></div>
            </div>
            <p>65% Overall Mastery</p>
          </div>

          <button className="primary-btn full-width">View Profile</button>
        </aside>

        {/* Main Dashboard */}
        <main className="dashboard-main">
          {/* Compact Top Nav */}
          <div className="compact-nav">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
<div className="dashboard-header">
  <img src={SATLogo} alt="Logo" className="dashboard-logo" />
  <h2 className="dashboard-title">DIGITAL SAT Dashboard</h2>
</div>

          <p className="dashboard-subtitle">
            Select a section to begin your prep journey
          </p>

          <div className="category-grid">
            {categories.map((cat, i) => (
              <CategoryCard
                key={i}
                name={cat.name}
                desc={cat.desc}
                color={cat.color}
                onClick={cat.onClick}

              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SatDashboard;
















// // import React from "react";
// // import "../styles/satdashboard.css";

// // const SatDashboard = () => {
// //   return (
// //     <div className="dashboard">
// //       <div className="dashboard-container">
// //         {/* Left Sidebar */}
// //         <aside className="dashboard-sidebar">
// //           <div className="profile-card">
// //             <img
// //               src={`https://cloud.appwrite.io/v1/avatars/initials?name=SAT User`}
// //               alt="User Avatar"
// //               className="profile-avatar"
// //             />
// //             <h3 className="profile-name">Welcome, Joel</h3>
// //             <p className="profile-role">SAT Aspirant</p>
// //           </div>

// //           <div className="progress-card">
// //             <h4>Your Progress</h4>
// //             <div className="progress-bar">
// //               <div className="progress-fill" style={{ width: "65%" }}></div>
// //             </div>
// //             <p>65% overall mastery</p>
// //           </div>

// //           <button className="primary-btn full-width">View Score History</button>
// //         </aside>

// //         {/* Main Dashboard */}
// //         <main className="dashboard-main">
// //           <h2 className="dashboard-title">SAT Practice Dashboard</h2>
// //           <p className="dashboard-subtitle">
// //             Select a section to begin your prep journey
// //           </p>

// //           <div className="category-grid">
// //             {[
// //               { name: "Math (No Calculator)", desc: "20 Questions", color: "#60a5fa" },
// //               { name: "Math (Calculator)", desc: "38 Questions", color: "#34d399" },
// //               { name: "Reading", desc: "52 Questions", color: "#fbbf24" },
// //               { name: "Writing & Language", desc: "44 Questions", color: "#f472b6" },
// //             ].map((cat, i) => (
// //               <div
// //                 key={i}
// //                 className="category-card"
// //                 style={{ borderTop: `5px solid ${cat.color}` }}
// //               >
// //                 <h3>{cat.name}</h3>
// //                 <p>{cat.desc}</p>
// //                 <button
// //                   className="secondary-btn"
// //                   style={{ backgroundColor: cat.color }}
// //                 >
// //                   Start Practice
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// export default SatDashboard;

// import React, { useState } from "react";
// import "../styles/satdashboard.css";

// const SatDashboard = () => {
//   const [activeTab, setActiveTab] = useState("Official Mock Tests");

//   const tabs = ["Official Mock Tests", "SAT Practice", "Resources"];

//   return (
//     <div className="dashboard">
//       <div className="dashboard-container">
//         {/* Left Sidebar */}
//         <aside className="dashboard-sidebar">
//           {/* Compact Nav */}
//           <div className="sidebar-nav">
//             {tabs.map((tab) => (
//               <div
//                 key={tab}
//                 className={`sidebar-tab ${activeTab === tab ? "active" : ""}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </div>
//             ))}
//           </div>

//           <div className="profile-card">
//             <img
//               src={`https://cloud.appwrite.io/v1/avatars/initials?name=SAT User`}
//               alt="User Avatar"
//               className="profile-avatar"
//             />
//             <h3 className="profile-name">Welcome, Joel</h3>
//             <p className="profile-role">SAT Aspirant</p>
//           </div>

//           <div className="progress-card">
//             <h4>Your Progress</h4>
//             <div className="progress-bar">
//               <div className="progress-fill" style={{ width: "65%" }}></div>
//             </div>
//             <p>65% overall mastery</p>
//           </div>

//           <button className="primary-btn full-width">View Score History</button>
//         </aside>

//         {/* Main Dashboard */}
//         <main className="dashboard-main">
//           <h2 className="dashboard-title">SAT Practice Dashboard</h2>
//           <p className="dashboard-subtitle">
//             Select a section to begin your prep journey
//           </p>

//           <div className="category-grid">
//             {[
//               { name: "Math (No Calculator)", desc: "20 Questions", color: "#60a5fa" },
//               { name: "Math (Calculator)", desc: "38 Questions", color: "#34d399" },
//               { name: "Reading", desc: "52 Questions", color: "#fbbf24" },
//               { name: "Writing & Language", desc: "44 Questions", color: "#f472b6" },
//             ].map((cat, i) => (
//               <div
//                 key={i}
//                 className="category-card"
//                 style={{ borderTop: `4px solid ${cat.color}` }}
//               >
//                 <h3>{cat.name}</h3>
//                 <p>{cat.desc}</p>
//                 <button
//                   className="secondary-btn"
//                   style={{ backgroundColor: cat.color }}
//                 >
//                   Start Practice
//                 </button>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SatDashboard;
