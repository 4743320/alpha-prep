// // import { useEffect, useState } from "react";
// // import { account } from '../lib/appwrite'
// // import { getSatScore } from '../lib/helpers/saveSatScore'

// // const ProfilePage = () => {
// //   const [user, setUser] = useState(null);
// //   const [scores, setScores] = useState([]);

// //   useEffect(() => {
// //     const fetchUserAndScores = async () => {
// //       try {
// //         const currentUser = await account.get();
// //         setUser(currentUser);

// //         const userScores = await getSatScore(currentUser.$id)
// //         setScores(userScores);
// //       } catch (error) {
// //         console.error("❌ Error loading profile:", error);
// //       }
// //     };

// //     fetchUserAndScores();
// //   }, []);

// //   if (!user) return <p>Loading profile...</p>;

// //   return (
// //     <div className="profile-container">
// //       <h1>{user.name || user.email}'s Profile</h1>
// //       <p><strong>Email:</strong> {user.email}</p>

// //       <h2>Your SAT Results</h2>
// //       {scores.length === 0 ? (
// //         <p>No test results yet.</p>
// //       ) : (
        
// //         <table className="results-table">
// //           <thead>
// //             <tr>
// //               <th>Test Name</th>
// //               <th>Total Score</th>
// //               <th>Reading Scaled</th>
// //               <th>Math Scaled</th>
// //               <th>Reading %</th>
// //               <th>Math %</th>
    

// //             </tr>
// //           </thead>
// //           <tbody>
// //             {scores.map((score) => (
// //               <tr key={score.$id}>
// //                 <td>{score.testName}</td>
// //                 <td><p>{score.totalScore}</p></td>
// //                 <td>{score.readingScaled}</td>
// //                 <td>{score.mathScaled}</td>
// //                 <td>{score.readingPercent}%</td>
// //                 <td>{score.mathPercent}%</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProfilePage;


// import React, { useEffect, useState } from 'react'
// import { account } from '../lib/appwrite'
// import '../styles/profilepage.css'

// import { getUserScore } from "../lib/helpers/saveSatScore";

// const ProfilePage = () => {

//   const [user, setUser] = useState(null)
//   const [scores, setScores] = useState({})
  
//   useEffect(()=>{
// const fetchUserAndScores = async()=>{
//     try{
//         const currentUser = await account.get()
//         setUser(currentUser)
//               const allScores = await getUserScore(currentUser.$id)
//       setScores(allScores)
//       }

    
//     catch(error){
//  console.error("❌ Error loading profile:", error);
//     }
//   }
//       fetchUserAndScores()
//   },[])

//   if(!user) return<p>Loading...........</p>

//   return (
    
//   <div className="profile-wrapper">
//     <div className="profile-card">
//       <div className="profile-header">
//         <img
//         // src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
//         src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(
//                 user?.name || "User"
//               )}`}
//         alt='Profile-Pic'
//         className='profile-avatar'
//         />
//          <div>
//             <h1 className="profile-name">{user.name || "User"}</h1>
//             <p className="profile-email">{user.email}</p>
//           </div>

//       </div>
//       {Object.entries(scores).length ===0 ?(
//         <p className="no-results">No test results yet.</p>
//       ):(
//         Object.entries(scores).map(([testType, TestDate])=>(
//           <div key={testType} className="profile-result">
//             <h2 className="test-headings">
//               {testType === "SAT" && "🎯 SAT Results"}
//                 {testType === "IELTS" && "🎧, IELTS Results"}
//                 {testType === "DET" && "🧠 DET Results"}
//             </h2>
//             <div className="table-container">
//               <table className="result-table">
//               <thread>
//                 <tr>
//                   {testType === "SAT" && 
                  
//                   (
//                      <>
//                           <th>Test Name</th>
//                           <th>Total</th>
//                           <th>Reading</th>
//                           <th>Math</th>
//                           <th>Reading %</th>
//                           <th>Math %</th>
//                         </>
//                   )}
//                  {testType === "IELTS" && (
//                         <>
//                           <th>Test Name</th>
//                           <th>Total Correct</th>
//                           <th>Band</th>
//                         </>
//                       )} 
//                 </tr>
//               </thread>
//               <tbody>
//                 {TestDate.map((item)=>{
//                   <tr key={item.$id}>
//                     <td>{item.testName}</td>
//                      {/* SAT */}
//                         {testType === "SAT" && (
//                           <>
//                             <td>{item.totalScore}</td>
//                             <td>{item.readingScaled}</td>
//                             <td>{item.mathScaled}</td>
//                             <td>{item.readingPercent}%</td>
//                             <td>{item.mathPercent}%</td>
//                           </>
//                         )}

//                         {/* IELTS */}
//                         {testType === "IELTS" && (
//                           <>
//                             <td>{item.totalCorrect}</td>
//                             <td>{item.band}</td>
//                           </>
//                         )}
                        

//                   </tr>
//                 })}
//               </tbody>
//               </table>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   </div>
//   )
// }

// export default ProfilePage


import React, { useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { getIeltsScore } from "../lib/helpers/ieltsScoreHelper";
import "../styles/profilepage.css"
const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [ieltsScore, setIeltsScore] = useState([]);

  useEffect(() => {
    const fetchUserAndScores = async () => {
      try {
        // Get the logged-in user
        const currentUser = await account.get();
        setUser(currentUser);

        // Get IELTS scores for this user
        const scores = await getIeltsScore(currentUser.$id);
        setIeltsScore(scores);
        console.log(scores)
      } catch (error) {
        console.error("❌ Error loading profile:", error);
      }
    };

    fetchUserAndScores();
  }, []);

  if (!user) return <p>Loading profile... OR PLEASE LOGIN TO VIEW YOUR PROFILE</p>;

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(
              user?.name || "User"
            )}`}
            alt="Profile"
            className="profile-avatar"
          />
          <div>
            <h1 className="profile-name">{user.name || "USER"}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        <h2>IELTS RESULTS</h2>
<div className="results-grid">
  {ieltsScore.length === 0 ? (
    <p className="no-result">No IELTS results yet. Please attempt a test.</p>
  ) : (
    ieltsScore.map((score) => (
      <div key={score.$id} className="result-card">
        <h3 className="test-name">{score.testType}</h3>
        <p><strong>Total Correct:</strong> {score.totalScore}</p>
        <p><strong>Band:</strong> {score.score}</p>
      </div>
    ))
  )}
</div>
        
      </div>
    </div>
  );
};

export default ProfilePage;
