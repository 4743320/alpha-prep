import React, { useState } from "react";
import { userUser } from "../hooks/UseUser";
import CategoryCard from "../components/CategoryCard";
import "../styles/maindash.css";
import { useNavigate } from "react-router-dom";
import IELTSLogo from "../assets/ieltslogo2.png";
import SATLogo from "../assets/sat.png";
import HeroImg from '../assets/Pics/hero.png'
import TOEFLIImg from '../assets/Pics/toefl.gif'
import Tabs from "../components/Tabs";
import CourseCard from "../components/CourseCard";
import AlphaPrepLogo from '../assets/Pics/ALPHAPREPNEW.png'
import FeatureCard from "../components/FeatureCard";


const MainDashBoard = () => {
  const { user } = userUser();
  const [activeTab, setActiveTab] = useState("IELTS Practice");
  const navigate = useNavigate()

const tabsList = ["DIGITAL-SAT", "IELTS ACADEMIC & GENERAL", "TOEFL"];
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Sidebar */}
    
        {/* Main Dashboard */}
        <main className="dashboard-main">


<div className="dashboard-header">
  <img src={AlphaPrepLogo} alt="Logo" className="dashboard-logo" style={{marginRight:"10px", 
    marginBottom:"10px"}} />
  <h2 className="dashboard-title" style={{marginBottom:"20px", textAlign:"center" }}>Choose Your Test</h2>
</div>

          
              <div className="container-course">
      <div className="course-row">
   <CourseCard imageUrl={IELTSLogo} title={"IELTS ACADEMIC / GENERAL"} category={"IELTS TESTS FOR ENGLISH LANGUAGE PROFICIENCY"}
   level="START LEARNING" level2={"PROFICIENCY TEST"} path={'/ielts-dash'}/>
      <CourseCard imageUrl={SATLogo} title={"DIGITAL SAT"} category={"DIGITAL SAT FOR UNIVERSITY ADMISSION/ ENTRY TEST"}
   level="START LEARNING" level2={"APTITUTE TEST"} path={'/sat-dash'}/>
         <CourseCard imageUrl={TOEFLIImg} title={"TOEFL - IBT"} category={"TOEFL TEST FOR ENF+GLISH PROFICIENCY"}
   level="START LEARNING" level2={"PROFICIENCY TEST"} onStartLearning={()=>navigate("/'/ielts-dash'")}/>
<CourseCard
  imageUrl={IELTSLogo}
  title="IELTS ACADEMIC / GENERAL"
  category="IELTS TESTS FOR ENGLISH LANGUAGE PROFICIENCY"
  level="Start Learning"
  level2="PROFICIENCY TEST"
  // duration="10h 30m"
  // // learners="2.5k"
  path="/ielts-dash"   // must be a string, not a function
/>
 {/* <CourseCard imageUrl={TOEFLIImg} title={"TOEFL - IBT"} category={"TOEFL TEST FOR ENF+GLISH PROFICIENCY"}
   level="START LEARNING" level2={"PROFICIENCY TEST"}/> */}


</div>

  

          </div>
        </main>
      </div>
    </div>
  );
};

export default MainDashBoard;













