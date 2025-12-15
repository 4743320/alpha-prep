import React, {useEffect, useState } from "react";
import { userUser } from "../hooks/UseUser";
import CategoryCard from "../components/CategoryCard";
import "../styles/newdash.css";
import { useNavigate, useLocation } from "react-router-dom";
import SATLogo from "../assets/sat.png";
import Tabs from "../components/Tabs";
import ProfileCard from '../components/ProfileCard'

const  SatPractice = () => {
//   const { user } = userUser();
const userData = userUser()
const user= userData?.user || null
  const location = useLocation()
const [activeTab, setActiveTab] = useState("SAT Practice");
  const navigate = useNavigate()

 

  const categories = [
    // { name: "Official KAPLAN MOCK TEST", desc: "4- Sections Reading & Writing & Maths", color: "#60a5fa" , onClick: ()=>navigate('/k-start-screen')},
    // { name: "Official PRINCETON MOCK TEST", desc:"4- Sections Reading & Writing & Maths", color: "#60a5fa" , onClick: ()=>navigate('/p-start-screen')},
    { name: "READING INFORMATION & IDEAS ", desc: "Central Ideas & Details - 52 Questions", color: "#60a5fa" },
    { name: "STANDARD ENGLISH CONVENTION ", desc: "Punctuation-52 Questions", color: "#60a5fa" },
  ];


 const tabsList = ["Official Mock Tests", "SAT Practice", "Resources"];
  const tabRoutes={
  "Official Mock Tests": "/sat-dash",
  "SAT Practice": "/sat-practice",
"Resources": "/sat-resources",

}

useEffect(()=>{
const currentTab = Object.keys(tabRoutes).find(tab=> location.pathname===tabRoutes[tab])
|| "Official Mock Tests"
setActiveTab(currentTab)
},[location.pathname])


  
  return (
    <div className="dashboard">
      <div className="dashboard-container">

<ProfileCard user={user}/>

        <main className="dashboard-main">

          <Tabs
            tabs={tabsList}
            activeTab={activeTab}
            // setActiveTab={setActiveTab}
              setActiveTab={(tab)=>{
              setActiveTab(tab)
           navigate(tabRoutes[tab]) }}
           activeColor="#60a5fa"
            // activeColor="rgb(141, 211, 234)"  
            //    // dynamic active background
            activeTextColor="#fff"      // text on active tab
            inactiveTextColor="#444"    // text on inactive tabs
          />

<div className="dashboard-header">
  <img src={SATLogo} alt="Logo" className="dashboard-logo" />
  <h2 className="dashboard-title">DIGITAL SAT PRACTICE</h2>
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

export default SatPractice;
















