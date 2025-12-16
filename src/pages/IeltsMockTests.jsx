import React, { useEffect, useState } from "react";
import { userUser } from "../hooks/UseUser";
import CategoryCard from "../components/CategoryCard";
import "../styles/newdash.css";
import { useLocation, useNavigate } from "react-router-dom";
import IELTSLogo from "../assets/ieltslogo2.png";
import Tabs from "../components/Tabs";
import ProfileCard from '../components/ProfileCard'
import { account } from "../lib/appwrite";

const IeltsMockTests = () => {
//   const { user } = userUser();
const userData = userUser()
const user= userData?.user || null
  const location = useLocation()

  const tabRoutes={
    "IELTS Practice": "/ielts-dash",
  "IELTS Tests": "/ielts-mock",
  "Resources": "/ielts-resources",
  }

  const [activeTab, setActiveTab] = useState("IELTS Practice");
  const navigate = useNavigate()

  useEffect(()=>{
    const currentTab=Object.keys(tabRoutes).find(tab=>location.pathname===tabRoutes[tab]) 
    || "IELTS Practice"
    setActiveTab(currentTab)

  },[location.pathname])


  const categories = [
    // { name: "IELTS-AC LISTENING PRACTICE-1", desc: "IELTS Academic- 4 LISTENING SECTIOINS", color: "#d33434ff" , onClick: ()=>navigate('/ieltstest')},
    // { name: "IELTS -AC READING PRACTICE-1", desc:"IELTS Academic - 3 READING SECTIONS", color: "#d33434ff"   , onClick:()=>navigate('/ielts')               },
    // { name: "IELTS -AC WRITING PRACTICE-1", desc: "IELTS Academic - 2 WRITING SECTIONS", color: "#d33434ff", onClick:()=>navigate('/ieltswrit') },
    // { name: "IELTS-AC LISTENING PRACTICE-2", desc: "IELTS Academic- 4 LISTENING SECTIOINS", color: "#d33434ff" , onClick: ()=>navigate('/ieltslist2')},
    // { name: "IELTS -AC READING PRACTICE-2", desc:"IELTS Academic - 3 READING SECTIONS", color: "#d33434ff"   , onClick:()=>navigate('/ieltsread2')               },
    // { name: "IELTS -AC WRITING PRACTICE-2", desc: "IELTS Academic - 2 WRITING SECTIONS", color: "#d33434ff",onClick:()=>navigate('/ieltswrit2') },
    { name: "IELTS -AC-TEST 3 2025", desc: "IELTS Academic TEST LISTENING, READING, WRITING", color: "#d33434ff",onClick:()=>navigate('/ielts-full') },
     { name: "IELTS -AC-II 2025", desc: "IELTS Academic TEST LISTENING, READING, WRITING", color: "#d33434ff",onClick:()=>navigate('/ielts-full2') }
  ];


const tabsList = ["IELTS Practice", "IELTS Tests", "Resources"];
  return (
    <div className="dashboard">
      <div className="dashboard-container">

<ProfileCard user={user}/>

        <main className="dashboard-main">

<Tabs
  tabs={tabsList}
  activeTab={activeTab}
  setActiveTab={(tab) => {
    setActiveTab(tab);
    navigate(tabRoutes[tab]);
  }}
  activeColor="#f24e4e"      // dynamic active background
  activeTextColor="#fff"      // text on active tab
  inactiveTextColor="#444"    // text on inactive tabs
/>

<div className="dashboard-header">
  <img src={IELTSLogo} alt="Logo" className="dashboard-logo" />
  <h2 className="dashboard-title">IELTS OFFICIAL TESTS</h2>
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
                user={user}

              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default IeltsMockTests;
















