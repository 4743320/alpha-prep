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

// import React, { useEffect, useState } from "react";
// import { account } from "../lib/appwrite";
// import { getIeltsScore, getIeltsWriting } from "../lib/helpers/ieltsScoreHelper";
// import { getSatScore } from "../lib/helpers/saveSatScore";
// import { getIeltsTest } from "../lib/helpers/ieltsScoreHelper";
// import "../styles/profilepage.css"

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);
//   const [scores, setScores] = useState({  });
//   const [selectedTest, setSelectedTest]= useState("")
//   const[writing, setWriting]= useState([])
//   const [ieltsTest, setIeltsTest]= useState([])

// // SAT: [], IELTS: []
//   useEffect(() => {
//     const fetchUserAndScores = async () => {
//       try {
//         // Logged-in user
//         const currentUser = await account.get();
//         setUser(currentUser);

//         // Fetch BOTH IELTS + SAT results from DB
//         const ielts = await getIeltsScore(currentUser.$id);
//         const sat = await getSatScore(currentUser.$id);
//         const ieltsFullTest = await getIeltsTest(currentUser.$id)

//         // Save in state
//         setScores({
//           SAT: sat || [],
//           IELTS: ielts || []
//         });
        

//         console.log("🔥 Loaded Scores:", {
//           SAT: sat,
//           IELTS: ielts,
//         });

//       } catch (error) {
//         console.error("❌ Error loading profile:", error);
//       }
//     };

//     fetchUserAndScores();
//   }, []);

//   useEffect(() => {
//   if (!user) {
//     return
//   }
//   const fetchWriting = async () => {
//     try {
//       const writingDocs = await getIeltsWriting(user.$id)
//       setWriting(writingDocs)
//       console.log("done")
//     } catch (error) {
//       console.error("Error fetching writing submissions:", error);
//     }
//   }
//   fetchWriting()
// }, [user])

//   if (!user) return <p>Loading profile... OR PLEASE LOGIN TO VIEW YOUR PROFILE</p>;

//   return (
//     <div className="profile-wrapper">

//       <div className="profile-card">
//      {/* <select
//   value={selectedTest}
//   onChange={(e) => setSelectedTest(e.target.value)}
// >
//   <option value="">Show all</option>

//   {Object.entries(scores).map(([testType, testArray]) =>
//     testArray.map((item) => (
//       <option key={item.$id} value={item.testType}>
//         {item.testType}
//       </option>
//     ))
//   )}
// </select> */}
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
//           <div className="profile-select-wrapper"><select
//   value={selectedTest}
//   onChange={(e) => setSelectedTest(e.target.value)}
// >
//   <option value="">SELECT TO SHOW SCORE</option>
//   <option value="SAT">SAT</option>
//   <option value="IELTS">IELTS</option>
// </select>
// </div>

//         </div>

//         {/* RESULTS */}
//        {Object.entries(scores)
//   .filter(([testType]) =>
//     selectedTest === "" ? true : testType === selectedTest
//   )
//   .map(([testType, testArray]) => (
//     <div key={testType}>
//       <h2>
//         {testType === "SAT" ? "🎯 SAT Results" : "🎧 IELTS Results"}
//       </h2>

//       {testArray.length === 0 ? (
//         <p className="no-result">No {testType} results yet.</p>
//       ) : (
//         <div className="results-grid">
//           {testArray.map((item) => (
//             <div key={item.$id} className="result-card">
//               <h3 className="test-name">{item.testType}</h3>

//               {testType === "SAT" && (
//                 <>
//                   <p><strong>Total Score:</strong> {item.totalScore}</p>
//                   <p><strong>Reading:</strong> {item.readingScaled} ({item.readingPercent}%)</p>
//                   <p><strong>Math:</strong> {item.mathScaled} ({item.mathPercent}%)</p>
//                 </>
//               )}

//               {testType === "IELTS" && (
//                 <>
//                   <p><strong>Total :</strong> {item.totalScore}</p>
//                   <p><strong>Total Correct:</strong> {item.score}</p>
//                               {testType === "IELTS" && writing.length > 0 && (
//   <div className="writing-results" style={{marginTop:"10px"}}>
//     <h3>📝 IELTS Writing </h3>
//     {writing
//       .filter(item => selectedTest === "IELTS" || selectedTest === "" ) // optional filter
//       .map(item => (
//         <div key={item.$id} className="result-card" style={{marginTop:"10px"}}>
//           <h4>{item.testName}</h4>
//           <p><strong>Task 1:</strong> {item.task1}</p>
//           <p><strong>Task 2:</strong> {item.task2}</p>
//           {/* <p><em>Submitted: {new Date(item.$createdAt).toLocaleString()}</em></p> */}
//         </div>
//       ))
//     }
//   </div>
// )}
//                 </>
//               )}

  
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
// ))}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
import React, { useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { getIeltsScore, getIeltsWriting, getIeltsTest } from "../lib/helpers/ieltsScoreHelper";
import { getSatScore } from "../lib/helpers/saveSatScore";
import "../styles/profilepage.css";

const ProfilePage = () => {
  // -----------------------------
  // 1️⃣ STATES
  // -----------------------------
  const [user, setUser] = useState(null);          
  const [scores, setScores] = useState({});        
  const [writing, setWriting] = useState([]);      
  const [ieltsTests, setIeltsTests] = useState([]); 
  const [selectedTest, setSelectedTest] = useState(""); 

  // -----------------------------
  // 2️⃣ FETCH USER & SCORES ON MOUNT
  // -----------------------------
  useEffect(() => {
    const fetchUserAndScores = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);

        const ielts = await getIeltsScore(currentUser.$id);
        const sat = await getSatScore(currentUser.$id);
        const ieltsFullTests = await getIeltsTest(currentUser.$id);
        const ieltsWriting = await getIeltsWriting(currentUser.$id);

        setScores({
          SAT: Array.isArray(sat) ? sat : [],
          IELTS: Array.isArray(ielts) ? ielts : []
        });

        setWriting(Array.isArray(ieltsWriting) ? ieltsWriting : []);
        setIeltsTests(Array.isArray(ieltsFullTests) ? ieltsFullTests : []);

        console.log("🔥 Loaded Scores:", { SAT: sat, IELTS: ielts, IELTS_Writing: ieltsWriting, IELTS_FullTest: ieltsFullTests });
      } catch (error) {
        console.error("❌ Error loading profile:", error);
      }
    };

    fetchUserAndScores();
  }, []);

  useEffect(() => {
    if (Array.isArray(ieltsTests) && ieltsTests.length > 0) {
      console.log("🧪 RAW IELTS FULL TEST OBJECT:", ieltsTests[0]);
      console.log("🧪 RAW task1Score:", ieltsTests[0]?.task1Score);
      console.log("🧪 TYPE of task1Score:", typeof ieltsTests[0]?.task1Score);
    }
  }, [ieltsTests]);

  // -----------------------------
  // 3️⃣ LOADING STATE
  // -----------------------------
  if (!user) return <p>Loading profile... OR PLEASE LOGIN TO VIEW YOUR PROFILE</p>;

  // -----------------------------
  // 4️⃣ RENDER
  // -----------------------------
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        {/* HEADER */}
        <div className="profile-header">
          <img
            src={`https://cloud.appwrite.io/v1/avatars/initials?name=${encodeURIComponent(user?.name || "User")}`}
            alt="Profile"
            className="profile-avatar"
          />
          <div>
            <h1 className="profile-name">{user.name || "USER"}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
          <div className="profile-select-wrapper">
            <select value={selectedTest} onChange={(e) => setSelectedTest(e.target.value)}>
              <option value="">SELECT TO SHOW SCORE</option>
              <option value="SAT">SAT</option>
              <option value="IELTS">IELTS</option>
            </select>
          </div>
        </div>

        {/* ---------------------- */}
        {/* 5️⃣ SAT RESULTS */}
        {/* ---------------------- */}
        {selectedTest === "SAT" && (
          <>
            <h2>🎯 SAT Results</h2>
            {!Array.isArray(scores.SAT) || scores.SAT.length === 0 ? (
              <p className="no-result">No SAT results yet.</p>
            ) : (
              <div className="results-grid">
                {scores.SAT.map(item => (
                  <div key={item.$id} className="result-card">
                    <h3>{item.testType}</h3>
                    <p><strong>Total Score:</strong> {item.totalScore}</p>
                    <p><strong>Reading:</strong> {item.readingScaled} ({item.readingPercent}%)</p>
                    <p><strong>Math:</strong> {item.mathScaled} ({item.mathPercent}%)</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ---------------------- */}
        {/* 6️⃣ IELTS RESULTS */}
        {/* ---------------------- */}
        {selectedTest === "IELTS" && (
          <>
            {/* MCQ SCORES */}
            <h2>🎧 IELTS Results (MCQ)</h2>
            {!Array.isArray(scores.IELTS) || scores.IELTS.length === 0 ? (
              <p className="no-result">No IELTS MCQ results yet.</p>
            ) : (
              <div className="results-grid">
                {scores.IELTS.map(item => (
                  <div key={item.$id} className="result-card">
                    <p><strong>Total Correct:</strong> {item.score}</p>
                    <p><strong>Total Score:</strong> {item.totalScore}</p>
                  </div>
                ))}
              </div>
            )}

            {/* WRITING SUBMISSIONS */}
            {Array.isArray(writing) && writing.length > 0 && (
              <>
                <h2>📝 IELTS Writing</h2>
                <div className="results-grid">
                  {writing.map(item => (
                    <div key={item.$id} className="result-card">
                      <h4>{item.testName}</h4>
                      <p><strong>Task 1:</strong> {item.task1}</p>
                      <p><strong>Task 2:</strong> {item.task2}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* FULL TESTS */}
            {Array.isArray(ieltsTests) && ieltsTests.length > 0 && (
              <>
                <h2>📊 IELTS Full Tests</h2>
                <div className="results-grid">
                  {ieltsTests.map(test => {
                    let task1 = null;
                    let task2 = null;

                    try {
                      if (test.task1Score) {
                        const parsed = typeof test.task1Score === "string" ? JSON.parse(test.task1Score) : test.task1Score;
                        task1 = parsed;
                      }
                    } catch (e) {
                      console.error("❌ Task1 parse failed", e);
                    }

                    try {
                      if (test.task2Score) {
                        const parsed = typeof test.task2Score === "string" ? JSON.parse(test.task2Score) : test.task2Score;
                        task2 = parsed;
                      }
                    } catch (e) {
                      console.error("❌ Task2 parse failed", e);
                    }

                    return (
                      <div key={test.$id} className="result-card">
                        <h4>{test.testName}</h4>
                        <p><strong>Listening:</strong> {test.listeningScore}</p>
                        <p><strong>Reading:</strong> {test.readingScore}</p>
                        <p><strong>Total:</strong> {test.totalscore}</p>
                        <p><strong>Band:</strong> {test.band}</p>
                        <p><strong>Writing Task 1:</strong> {test.writingTask1}</p>
                        <p><strong>Writing Task 2:</strong> {test.writingTask2}</p>
                        

                        {/* TASK 1 */}
                        <h5>✍️ Writing Task 1 Score</h5>
                        {task1 ? (
                          <>
                            <p><strong>Task Achievement:</strong> {task1["Task Achievement"]}</p>
                            <p><strong>Coherence & Cohesion:</strong> {task1["Coherence & Cohesion"]}</p>
                            <p><strong>Vocabulary:</strong> {task1["Vocabulary"]}</p>
                            <p><strong>Grammar:</strong> {task1["Grammar"]}</p>
                            <p><strong>Overall:</strong> {task1["Overall"]}</p>
                            <p><strong>Feedback:</strong></p>
                            <pre style={{ whiteSpace: "pre-wrap" }}>{task1["Feedback"]}</pre>
                          </>
                        ) : <p>Not scored yet</p>}

                        {/* TASK 2 */}
                        <h5>✍️ Writing Task 2 Score</h5>
                        {task2 ? (
                          <>
                            <p><strong>Task Achievement:</strong> {task2["Task Achievement"]}</p>
                            <p><strong>Coherence & Cohesion:</strong> {task2["Coherence & Cohesion"]}</p>
                            <p><strong>Vocabulary:</strong> {task2["Vocabulary"]}</p>
                            <p><strong>Grammar:</strong> {task2["Grammar"]}</p>
                            <p><strong>Overall:</strong> {task2["Overall"]}</p>
                            <p><strong>Feedback:</strong></p>
                            <pre style={{ whiteSpace: "pre-wrap" }}>{task2["Feedback"]}</pre>
                          </>
                        ) : <p>Not scored yet</p>}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
