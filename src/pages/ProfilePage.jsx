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


// import React, { useEffect, useState } from "react";
// import { account } from "../lib/appwrite";
// import { getIeltsScore } from "../lib/helpers/ieltsScoreHelper";
// import "../styles/profilepage.css"
// const ProfilePage = () => {
//   const [user, setUser] = useState(null);
//   // const [ieltsScore, setIeltsScore] = useState([]);
//   const [scores, setScores] = useState({})

//   useEffect(() => {
//     const fetchUserAndScores = async () => {
//       try {
//         // Get the logged-in user
//         const currentUser = await account.get();
//         setUser(currentUser);

//         const ielts = account.get(currentUser.$id)
//         const sat=account.get(currentUser.$id)

//         // Get IELTS scores for this user
//         // const scores = await getIeltsScore(currentUser.$id);
//         // setIeltsScore(scores);
//         setScores({
//           SAT:sat || [],
//           IELTS: ielts || []
//         })
//         console.log(scores)
//       } catch (error) {
//         console.error("❌ Error loading profile:", error);
//       }
//     };

//     fetchUserAndScores();
//   }, []);

//   if (!user) return <p>Loading profile... OR PLEASE LOGIN TO VIEW YOUR PROFILE</p>;

//   return (
//     <div className="profile-wrapper">
//       <div className="profile-card">
//         <div className="profile-header">
//           <img
//             src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(
//               user?.name || "User"
//             )}`}
//             alt="Profile"
//             className="profile-avatar"
//           />
//           <div>
//             <h1 className="profile-name">{user.name || "USER"}</h1>
//             <p className="profile-email">{user.email}</p>
//           </div>
//         </div>

//         <h2>IELTS RESULTS</h2>
// <div className="results-grid">
//   {Object.entries(scores).map(([testType, testArray]) => (
//     <div key={testType}>
//       <h2>
//         {testType === "SAT" ? "🎯 SAT Results" : testType === "IELTS" ? "🎧 IELTS Results" : testType}
//       </h2>

//       {testArray.length === 0 ? (
//         <p className="no-result">No {testType} results yet.</p>
//       ) : (
//         <div className="results-grid">
//           {testArray.map((item) => (
//             <div key={item.$id} className="result-card">
//               <h3 className="test-name">{item.testName}</h3>

//               {/* SAT */}
//               {testType === "SAT" && (
//                 <>
//                   <p><strong>Total Score:</strong> {item.totalScore}</p>
//                   <p><strong>Reading:</strong> {item.readingScaled} ({item.readingPercent}%)</p>
//                   <p><strong>Math:</strong> {item.mathScaled} ({item.mathPercent}%)</p>
//                 </>
//               )}

//               {/* IELTS */}
//               {testType === "IELTS" && (
//                 <>
//                   <p><strong>Total Correct:</strong> {item.totalScore}</p>
//                   <p><strong>Band:</strong> {item.score}</p>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   ))}
// </div>

//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


{/* <div className="results-grid">
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
</div> */}

import React, { useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { getIeltsScore, getIeltsWriting } from "../lib/helpers/ieltsScoreHelper";
import { getSatScore } from "../lib/helpers/saveSatScore";
import "../styles/profilepage.css"

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [scores, setScores] = useState({  });
  const [selectedTest, setSelectedTest]= useState("")
  const[writing, setWriting]= useState([])

// SAT: [], IELTS: []
  useEffect(() => {
    const fetchUserAndScores = async () => {
      try {
        // Logged-in user
        const currentUser = await account.get();
        setUser(currentUser);

        // Fetch BOTH IELTS + SAT results from DB
        const ielts = await getIeltsScore(currentUser.$id);
        const sat = await getSatScore(currentUser.$id);

        // Save in state
        setScores({
          SAT: sat || [],
          IELTS: ielts || []
        });

        console.log("🔥 Loaded Scores:", {
          SAT: sat,
          IELTS: ielts,
        });

      } catch (error) {
        console.error("❌ Error loading profile:", error);
      }
    };

    fetchUserAndScores();
  }, []);

  useEffect(() => {
  if (!user) {
    return
  }
  const fetchWriting = async () => {
    try {
      const writingDocs = await getIeltsWriting(user.$id)
      setWriting(writingDocs)
      console.log("done")
    } catch (error) {
      console.error("Error fetching writing submissions:", error);
    }
  }
  fetchWriting()
}, [user])

  if (!user) return <p>Loading profile... OR PLEASE LOGIN TO VIEW YOUR PROFILE</p>;

  return (
    <div className="profile-wrapper">

      <div className="profile-card">
     {/* <select
  value={selectedTest}
  onChange={(e) => setSelectedTest(e.target.value)}
>
  <option value="">Show all</option>

  {Object.entries(scores).map(([testType, testArray]) =>
    testArray.map((item) => (
      <option key={item.$id} value={item.testType}>
        {item.testType}
      </option>
    ))
  )}
</select> */}
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
          <div className="profile-select-wrapper"><select
  value={selectedTest}
  onChange={(e) => setSelectedTest(e.target.value)}
>
  <option value="">SELECT TO SHOW SCORE</option>
  <option value="SAT">SAT</option>
  <option value="IELTS">IELTS</option>
</select>
</div>

        </div>

        {/* RESULTS */}
       {Object.entries(scores)
  .filter(([testType]) =>
    selectedTest === "" ? true : testType === selectedTest
  )
  .map(([testType, testArray]) => (
    <div key={testType}>
      <h2>
        {testType === "SAT" ? "🎯 SAT Results" : "🎧 IELTS Results"}
      </h2>

      {testArray.length === 0 ? (
        <p className="no-result">No {testType} results yet.</p>
      ) : (
        <div className="results-grid">
          {testArray.map((item) => (
            <div key={item.$id} className="result-card">
              <h3 className="test-name">{item.testType}</h3>

              {testType === "SAT" && (
                <>
                  <p><strong>Total Score:</strong> {item.totalScore}</p>
                  <p><strong>Reading:</strong> {item.readingScaled} ({item.readingPercent}%)</p>
                  <p><strong>Math:</strong> {item.mathScaled} ({item.mathPercent}%)</p>
                </>
              )}

              {testType === "IELTS" && (
                <>
                  <p><strong>Total :</strong> {item.totalScore}</p>
                  <p><strong>Total Correct:</strong> {item.score}</p>
                              {testType === "IELTS" && writing.length > 0 && (
  <div className="writing-results" style={{marginTop:"10px"}}>
    <h3>📝 IELTS Writing </h3>
    {writing
      .filter(item => selectedTest === "IELTS" || selectedTest === "" ) // optional filter
      .map(item => (
        <div key={item.$id} className="result-card" style={{marginTop:"10px"}}>
          <h4>{item.testName}</h4>
          <p><strong>Task 1:</strong> {item.task1}</p>
          <p><strong>Task 2:</strong> {item.task2}</p>
          {/* <p><em>Submitted: {new Date(item.$createdAt).toLocaleString()}</em></p> */}
        </div>
      ))
    }
  </div>
)}
                </>
              )}

  
            </div>
          ))}
        </div>
      )}
    </div>
))}
      </div>
    </div>
  );
};

export default ProfilePage;
