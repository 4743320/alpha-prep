// // Tabs.jsx
// import React from "react";
// import '../styles/tabs.css'

// export default function Tabs({
//   tabs = [],
//   activeTab,
//   onChange,
//   color = "#444",
//   activeColor = "#fff",
//   bg = "#f0f0f0",
//   activeBg = "#007bff",
//   radius = "12px",
//   padding = "10px 16px",
//   gap = "10px",
//   fontSize = "15px",
// }) {
//   return (
//     <div
//       className="dashboard-tabs"
//       style={{
//         display: "flex",
//         gap,
//         overflowX: "auto",      // 🔥 Smooth horizontal scroll on mobile
//         scrollbarWidth: "none", // Firefox hide scrollbar
//         msOverflowStyle: "none",// IE hide scrollbar
//         paddingBottom: "4px",
//       }}
//     >
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => onChange(tab)}
//           className="tab-btn"
//           style={{
//             padding,
//             borderRadius: radius,
//             fontSize,
//             background: activeTab === tab ? activeBg : bg,
//             color: activeTab === tab ? activeColor : color,
//             border: "none",
//             whiteSpace: "nowrap",  // 🔥 Prevents breaking
//             cursor: "pointer",
//             flexShrink: 0,         // 🔥 Prevents squeezing too much
//             transition: "0.2s",
//           }}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// }

// Tabs.jsx
// Tabs.jsx
// import React, { useEffect } from "react";
// import '../styles/tabs.css'

// export default function Tabs({ tabs = [], activeTab, setActiveTab, activeColor }) {
//   // Set the first tab as active by default
//   useEffect(() => {
//     if (!activeTab && tabs.length > 0) setActiveTab(tabs[0]);
//   }, [activeTab, setActiveTab, tabs]);

//   return (
//     <div className="compact-nav2">
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           className={`nav-tab2 ${activeTab === tab ? "active" : ""}`}
//           onClick={() => setActiveTab(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// }
import React, { useEffect } from "react";
import '../styles/tabs.css'

export default function Tabs({
  tabs = [],
  activeTab,
  setActiveTab,
  activeColor = "rgb(242, 78, 78)",   // default active bg
  activeTextColor = "#fff",            // default active text
  inactiveTextColor = "#444"           // default inactive text
}) {
  // Set the first tab as active by default
  useEffect(() => {
    if (!activeTab && tabs.length > 0) setActiveTab(tabs[0]);
  }, [activeTab, setActiveTab, tabs]);

  return (
    <div className="compact-nav2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`nav-tab2 ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
          style={{
            backgroundColor: activeTab === tab ? activeColor : "transparent",
            color: activeTab === tab ? activeTextColor : inactiveTextColor,
            boxShadow: activeTab === tab
              ? `0 3px 8px ${activeColor}60`
              : "none",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
