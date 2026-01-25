import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import SatDashboard from './pages/SatDashboard'

import KaplanEnglishModule2 from './MockTests/KaplanTest/KaplanEnglishModule2'
import KaplanEnglishModule1 from './MockTests/KaplanTest/KaplanEnglishModule1'
import StartScreen from './MockTests/KaplanTest/StartScreen'
import BreakTimer from './MockTests/KaplanTest/BrreakTimer'
import KaplanMathsModule1 from './MockTests/KaplanTest/KaplanMathsModule1'
import KaplanMathsModule2 from './MockTests/KaplanTest/KaplanMathsModule2'
import ResultsPage from './MockTests/KaplanTest/ResultPage'

import IeltsTest1 from './Tests/IeltsTests/IeltsListening/IeltsTest1'
import IeltsReadingTest1 from './Tests/IeltsTests/IeltsReading/IeltsReadingTest1'
import IeltsDashBoard from './pages/IeltsDashBoard'
import PStartScreen from './MockTests/PrincetonTest/PStartScreen'
import PrincetonEnglishModule1 from './MockTests/PrincetonTest/PrincetonEnglishModule1'
import PrincetonEnglishModule2 from './MockTests/PrincetonTest/PrincetonEnglishModule2'
import PBreakTimer from './MockTests/PrincetonTest/BreakTimer'
import IeltsListeningTest2 from './Tests/IeltsTests/IeltsListening/IeltsListeningTest2'
import IeltsReadingTest2 from './Tests/IeltsTests/IeltsReading/IeltsReadingTest2'
import PrincetonMathsModule1 from './MockTests/PrincetonTest/PrincetonMathModule1'
import PrincetonMathsModule2 from './MockTests/PrincetonTest/PrincetonMathModule2'
import ProfilePage from './pages/ProfilePage'
import IeltsWritingTest1 from './Tests/IeltsTests/IeltsWriting/IeltsWritingTest1'
import IeltsWritingTest2 from './Tests/IeltsTests/IeltsWriting/IeltsWritingTest2'
import NewDash from './pages/New Dash'
import CourseCard from './components/CourseCard'
import New from './pages/New' 
import MainDashBoard from './pages/MainDash'
import IeltsMockTests from './pages/IeltsMockTests'
import SatPractice from './pages/SatPractice'
import IELTSTest3 from './Tests/Ielts Full Tests/IELTSTest3'
import IELTSTest4 from './Tests/Ielts Full Tests/IELTSTest4'
import More from './pages/More'
import Main from './pages/CourseSpace/Main'
import ReadingTest from '../PTE/ReadingTest'
import MCQ from '../PTE/Iteration/MCQ'
import HighlightIncorrect from '../PTE/Iteration/HighlightIncorrect'
import FillInBlanks from '../PTE/Iteration/FillInTheBlanks'
import PTEDashboard from './pages/PteDashBoard'
import Interface from '../PTE/Iteration/Interface'
import ReorderParagraph from '../PTE/Iteration/Reorderparagraph'
import PTEDashboard2 from '../PTE/Iteration2/PTEDashboard'
import Practice from './pages/ptactice'
// import PTEReadingFillInTheBlanks from '../PTE/Iteration2/PTEReadingFillInTheBlanks'
import FillInTheBlanksDrag_Drop from '../PTE/Iteration/FillinTheBlanksDrag_Drop'

const AppRoutes = () => {
  return (
    <Router>
        <NavBar/>
        <Routes>
          {/* IELTS COMPELET TABS */}
         <Route path="/ielts-mock" element={<IeltsMockTests/>}/>
            {/* <Route path='/' element={<LandingPage/>}/> */}
            <Route path='/' element={<New/>}/>
            <Route path='/sat-dash' element={<SatDashboard/>}/>
            <Route path="/sat-practice" element={<SatPractice/>}/>
            <Route path='/ielts-dash' element={<IeltsDashBoard/>}/>
            {/* <Route path='/pte-dash' element={<PTEDashboard/>}/> */}
            <Route path='/k-start-screen' element={<StartScreen/>}/>
             <Route path='/new-dash' element={<NewDash/>}/>
            <Route path='/course-card' element={<CourseCard/>}/>
            <Route path='/main-dash' element={<MainDashBoard/>}/>
             <Route path='/profile' element={<ProfilePage/>}/>
             {/* <Route path='/more' element={<More/>}/> 
             <Route path='/main' element={<Main/>}/>  */}
             <Route path='/reading-pte' element={<ReadingTest/>}/> 
             <Route path='/mcq' element={<MCQ/>}/> 
             <Route path='/hi' element={<HighlightIncorrect/>}/> 
             <Route path='/fb' element={<FillInBlanks/>}/>
             <Route path='/rp' element={<ReorderParagraph/>}/>
             <Route path='/q-interface' element={<Interface/>}/>
             <Route path='/pte-dash2' element={<PTEDashboard2/>}/> 
             <Route path='/practice' element={<Practice/>}/> 
             <Route path='/fibd' element={<FillInTheBlanksDrag_Drop/>}/> 
             

{/* PTE 2nd Iteration Routes */}
            <Route path='/pte-dash2' element={<PTEDashboard2/>}/>
                  

    {/* <Route path="/scoretest" element={<ScoreTest />} /> */}
    {/* SAT ROUTES */}
    <Route path='/kap-e-m1' element={<KaplanEnglishModule1/>}/>
    <Route path='/kap-e-m2' element={<KaplanEnglishModule2/>}/>    
    <Route path='/k-break-timer' element={<BreakTimer/>}/>
    <Route path='/kap-m-m1' element={<KaplanMathsModule1/>}/>
    <Route path='/kap-m-m2' element={<KaplanMathsModule2/>}/>
    <Route path='/result-page' element={<ResultsPage/>}/>
    <Route path='/p-start-screen' element={<PStartScreen/>}/>
    <Route path='pri-e-m1' element={<PrincetonEnglishModule1/>}/>
    <Route path='pri-e-m2' element={<PrincetonEnglishModule2/>}/>
    <Route path='p-break-timer' element={<PBreakTimer/>}/>
    <Route path='/pri-m-m1' element={<PrincetonMathsModule1/>}/>
    <Route path='/pri-m-m2' element={<PrincetonMathsModule2/>}/>
    {/* IELTS ROUTES */}
    <Route path='/ielts' element={<IeltsReadingTest1/>}/>
    <Route path='/ieltstest' element={<IeltsTest1/>}/>
    <Route path='/ieltslist2' element={<IeltsListeningTest2/>}/>
    <Route path='/ieltsread2' element={<IeltsReadingTest2/>}/>
   
    <Route path='/ieltswrit' element={<IeltsWritingTest1/>}/>
    <Route path='/ieltswrit2' element={<IeltsWritingTest2/>}/>
    {/* IELTS FULL TEST ROUTES */}
    <Route path='/ielts-full' element={<IELTSTest3/>}/>
    <Route path='ielts-full2' element={<IELTSTest4/>}/>

        </Routes>
    </Router>

    
  )
}

export default AppRoutes