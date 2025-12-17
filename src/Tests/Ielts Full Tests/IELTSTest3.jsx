import React, { useState } from "react";
import '../../styles/IeltsTest/ieltstest.css'
// import '../../styles/ieltsListening.css'
import { useNavigate } from "react-router-dom";
import BlankInput from "../../components/IeltsFullTestComponents/BlankInput";
import IELTSLogo from "../../assets/ieltslogo2.png";
import '../../styles/ielts.css'
import '../../styles/misc.css'
import DropDown from "../../components/IeltsFullTestComponents/DropDown";


// ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩
const IELTSTest3 = () => {
  const navigate = useNavigate();

  // State to track section and part
  const [section, setSection] = useState("listening"); // listening, reading, writing
  const [part, setPart] = useState(1);

  // Answers object
  const [allAnswers, setAllAnswers] = useState({
    listening: { part1: {}, part2: {}, part3: {}, part4: {} },
    reading: { part1: {}, part2: {}, part3: {} },
    writing: { part1: {}, part2: {} },
  });

  // Handle answer change
  const handleAnswerChange = (section, part, name, value) => {
    setAllAnswers((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [part]: {
          ...prev[section][part],
          [name]: value,
        },
      },
    }));
  };
const handleSubmit = () => {
  console.log(JSON.stringify(allAnswers, null, 2));
};

  // Test structure for bottom bar
  const testStructure = {
    listening: 4,
    reading: 3,
    writing: 2,
  };
const questions11to16 = [
  {
    id: 11,
    text: 'Who was responsible for starting the community project?',
    options: [
      'the castle owners',
      'a national charity',
      'the local council',
    ],
  },
  {
    id: 12,
    text: 'How was the gold coin found?',
    options: [
      'Heavy rain had removed some of the soil.',
      'The ground was dug up by wild rabbits.',
      'A person with a metal detector searched the area.',
    ],
  },
  {
    id: 13,
    text: 'What led the archaeologists to believe there was an ancient village on this site?',
    options: [
      'the lucky discovery of old records',
      'the bases of several structures visible in the grass',
      'the unusual stones found near the castle',
    ],
  },
  {
    id: 14,
    text: 'What are the team still hoping to find?',
    options: [
      'everyday pottery',
      'animal bones',
      'pieces of jewellery',
    ],
  },
  {
    id: 15,
    text: 'What was found on the other side of the river to the castle?',
    options: [
      'the remains of a large palace',
      'the outline of fields',
      'a number of small huts',
    ],
  },
  {
    id: 16,
    text: 'What do the team plan to do after work ends this summer?',
    options: [
      'prepare a display for a museum',
      'take part in a television programme',
      'start to organise school visits',
    ],
  },
];

  // Skeleton parts content
  const partsContent = {
    listening: [
      <div key="listening-part1">
                  {/* Listening Part 1 */}
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 1</h2>
        <audio controls>
          <source src="/Audio/L_1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

     {/* Right column */}
      <div className="right-column">
        <h3>Questions 1-10</h3>
        <p>Complete the table below.</p>
        <p>
          Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.  </p>
<table className="listening-table">
  <thead>
    <tr>
      <th>Name of company</th>
      <th>Information about costs</th>
      <th>Additional notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Peak Rentals</td>
      <td>
        Prices range from $105 to 
        $ <BlankInput
        section='listening'
        part='part1'
        id={1}
        placeholder='1'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
{" "}
        per room per month
      </td>
      <td>
        • The furniture is very<BlankInput
        section='listening'
        part='part1'
        id={2}
        placeholder='2'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
       {" "}
        <br />
        • Delivers in 1-2 days
        <br />
        • Special offer: free
       <BlankInput
        section='listening'
        part='part1'
        id={3}
        placeholder='3'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        with every living room set
       <BlankInput
        section='listening'
        part='part1'
        id={4}
        placeholder='4'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        and Oliver
        <br />
        Mid-range prices 12% monthly fee for
       <BlankInput
        section='listening'
        part='part1'
        id={5}
        placeholder='5'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
        <br />
        Also offers a cleaning service
      </td>
    </tr>

    <tr>
      <td>Larch Furniture</td>
      <td>
        Offers cheapest prices for renting furniture and
       <BlankInput
        section='listening'
        part='part1'
        id={6}
        placeholder='6'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        items
        <br />
        • Must have own
       <BlankInput
        section='listening'
        part='part1'
        id={7}
        placeholder='7'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
        <br />
         • Minimum contract length: six months
        <BlankInput
        section='listening'
        part='part1'
        id={8}
        placeholder="8"
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
      </td>
      <td>
        See the
        <BlankInput
        section='listening'
        part='part1'
        id={9}
        placeholder='9'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        for the most up-to-date prices
        <br />
        <BlankInput
        section='listening'
        part='part1'
        id={10}
        placeholder='10'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        are allowed within 7 days of delivery
      </td>
    </tr>
  </tbody>
</table>

      
      </div>
    
    </div>
  
   </div>


      </div>,
      <div key="listening-part2">
        {/* Listening Part 2 */}
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 2</h2>
        <audio controls>
          <source src="/Audio/L_1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
     <h3><strong>Questions 27–30</strong></h3>
        <p>Choose the correct letter <strong>A, B, C, or D</strong>.</p>
      <h3><strong>Bidcaster Community Archaeology Project</strong></h3>
      {questions11to16.map((q)=>(
        <div key={q} className="question-block">
          <p className="mcq-question"><strong>{q.id}.</strong> {q.text}</p>
          {q.options.map((text,index)=>(
            <label key={index}>
              <input type="radio"
              name={`q${q.id}`}
              value={text}
              checked={allAnswers.listening.part2[`q${q.id}`]=== text}
              onChange={(e)=>{handleAnswerChange('listening', 'part2' ,e.target.name, e.target.value)}}
               />
               {text}
            </label>
          ))}
        </div>
      ))}
      {/* Labling Map */}
        <div className="meowx">
          <h3><strong>Questions 17-20</strong></h3>
          <p>Label the map below.</p>
          <p>
            Choose the correct letter, <strong>A–G</strong>, next to Questions 17-20..
          </p>
        </div>

        <div className="center-containerx">
          <img src='' alt="" />
        </div>

        <div className="dropdown-blockx">
          <p>17.bridge foundations<DropDown section='listening' part='part2' id={17} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/> </p>
          <p>18.rubbish pit<DropDown section='listening' part='part2' id={18} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/>  </p>
          <p>19.meeting hall<DropDown section='listening' part='part2' id={19} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/>  </p>
          <p>20.fish pond <DropDown section='listening' part='part2' id={20} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/>  </p>
        </div>
    </div>
   </div>
   </div>
      </div>,
      <div key="listening-part3">        {/* Listening Part 1 */}
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 3</h2>
        <audio controls>
          <source src="/Audio/L_1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
          <div className="question-block">
  <p>Fill in the blank:</p>
  <input
    type="text"
    name="q1" // this will be passed as 'name' to handleAnswerChange
    placeholder="Type your answer..."
    value={allAnswers.listening.part1["q1"] || ""}
    onChange={(e) =>
      handleAnswerChange("listening", "part1", e.target.name, e.target.value)
    }
  />
</div>

    </div>
   </div>
   </div></div>,
      <div key="listening-part4">        {/* Listening Part 1 */}
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 4</h2>
        <audio controls>
          <source src="/Audio/L_1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
          <div className="question-block">
  <p>Fill in the blank:</p>
  <input
    type="text"
    name="q1" // this will be passed as 'name' to handleAnswerChange
    placeholder="Type your answer..."
    value={allAnswers.listening.part1["q1"] || ""}
    onChange={(e) =>
      handleAnswerChange("listening", "part1", e.target.name, e.target.value)
    }
  />
</div>

    </div>
   </div>
   </div>
   </div>,
    ],
    reading: [
      <div key="reading-part1">
                  <div className="ielts-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <h2>Passage 1.</h2> <br />
        <h3>
          You should spend about 20 minutes on <strong>Questions 1-13</strong>, 
          which are based on Reading Passage 1 below.
        </h3>
         <p className='para'>
          The kākāpō is a nocturnal, flightless parrot that is critically endangered and one of New Zealand's unique treasures. The kākāpō, also known as the owl parrot, is a large, forest-dwelling bird, with a pale owl-like face. Up to 64 cm in length, it has predominantly yellow-green feathers, forward-facing eyes, a large grey beak, large blue feet, and relatively short wings and tail. It is the world's only flightless parrot, and is also possibly one of the world's longest-living birds, with a reported lifespan of up to 100 years.
        </p>
        <p>
          Kākāpō are solitary birds and tend to occupy the same home range for many years. They forage on the ground and climb high into trees. They often leap from trees and flap their wings, but at best manage a controlled descent to the ground. They are entirely vegetarian, with their diet including the leaves, roots and bark of trees as well as bulbs, and fern fronds.
        </p>
        <p>
          Kākāpō breed in summer and autumn, but only in years when food is plentiful. Males play no part in incubation or chick-rearing – females alone incubate eggs and feed the chicks. The 1-4 eggs are laid in soil, which is repeatedly turned over before and during incubation. The female kākāpō has to spend long periods away from the nest searching for food, which leaves the unattended eggs and chicks particularly vulnerable to predators.
        </p>
        <p>
          Before humans arrived, kākāpō were common throughout New Zealand's forests. However, this all changed with the arrival of the first Polynesian settlers about 700 years ago. For the early settlers, the flightless kākāpō was easy prey. They ate its meat and used its feathers to make soft cloaks. With them came the Polynesian dog and rat, which also preyed on kākāpō. By the time European colonisers arrived in the early 1800s, kākāpō had become confined to the central North Island and forested parts of the South Island.
        </p>
        <p>
          The fall in kākāpō numbers was accelerated by European colonisation. A great deal of habitat was lost through forest clearance, and introduced species such as deer depleted the remaining forests of food. Other predators such as cats, stoats and two more species of rat were also introduced. The kākāpō were in serious trouble.
        </p>
        <p>
          In 1894, the New Zealand government launched its first attempt to save the kākāpō. Conservationist Richard Henry led an effort to relocate several hundred of the birds to predator-free Resolution Island in Fiordland. Unfortunately, the island didn't remain predator free – stoats arrived within six years, eventually destroying the kākāpō population. By the mid-1900s, the kākāpō was practically a lost species. Only a few clung to life in the most isolated parts of New Zealand.
        </p>
        <p>
          From 1949 to 1973, the newly formed New Zealand Wildlife Service made over 60 expeditions to find kākāpō, focusing mainly on Fiordland. Six were caught, but there were no females amongst them and all but one died within a few months of captivity. In 1974, a new initiative was launched, and by 1977, 18 more kākāpō were found in Fiordland. However, there were still no females. In 1977, a large population of males was spotted in Rakiura – a large island free from stoats, ferrets and weasels. There were about 200 individuals, and in 1980 it was confirmed females were also present. These birds have been the foundation of all subsequent work in managing the species.
        </p>
        <p>
          Unfortunately, predation by feral cats on Rakiura Island led to a rapid decline in kākāpō numbers. As a result, during 1980–97, the surviving population was evacuated to three island sanctuaries: Codfish Island, Maud Island and Little Barrier Island. However, breeding success was hard to achieve. Rats were found to be a major predator of kākāpō chicks and an insufficient number of chicks survived to offset adult mortality. By 1995, although at least 12 chicks had been produced on the islands, only three had survived. The kākāpō population had dropped to 51 birds.
        </p>
        <p>
          In 1996, a new Recovery Plan was launched, together with a specialist advisory group called the Kākāpō Scientific and Technical Advisory Committee and a higher amount of funding. Renewed steps were taken to control predators on the three islands. Cats were eradicated from Little Barrier Island in 1980, and possums were eradicated from Codfish Island by 1986. However, the population did not start to increase until rats were removed from all three islands, and the birds were more intensively managed.
        </p>
        <p>
          After the first five years of the Recovery Plan, the population was on target. By 2000, five new females had been produced, and the total population had grown to 62 birds. For the first time, there was cautious optimism for the future of kākāpō and by June 2020, a total of 210 birds was recorded.
        </p>
        <p>
          Today, kākāpō management continues to be guided by the kākāpō Recovery Plan. Its key goals are: minimise the loss of genetic diversity in the kākāpō population, restore or maintain sufficient habitat to accommodate the expected increase in the kākāpō population, and ensure stakeholders continue to be fully engaged in the preservation of the species.

        </p>

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
            <div className="question-block">
  <p>Fill in the blank:</p>
  <input
    type="text"
    name="q1" // this will be passed as 'name' to handleAnswerChange
    placeholder="Type your answer..."
    value={allAnswers.reading.part1["q1"] || ""}
    onChange={(e) =>
      handleAnswerChange("reading", "part1", e.target.name, e.target.value)
    }
  />
</div>

    </div>
    </div>
  
      </div>,
      <div key="reading-part2">
                       <div className="ielts-container">
      {/* LEFT COLUMN */}
      <div className="left-column">

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
            <div className="question-block">
  <p>Fill in the blank:</p>
  <input
    type="text"
    name="q1" // this will be passed as 'name' to handleAnswerChange
    placeholder="Type your answer..."
    value={allAnswers.reading.part1["q1"] || ""}
    onChange={(e) =>
      handleAnswerChange("reading", "part1", e.target.name, e.target.value)
    }
  />
</div>

    </div>
    </div>
  
      </div>,
      <div key="reading-part3">
    <div className="ielts-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
             </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
            <div className="question-block">
  <p>Fill in the blank:</p>
  <input
    type="text"
    name="q1" // this will be passed as 'name' to handleAnswerChange
    placeholder="Type your answer..."
    value={allAnswers.reading.part1["q1"] || ""}
    onChange={(e) =>
      handleAnswerChange("reading", "part1", e.target.name, e.target.value)
    }
  />
</div>

    </div>
    </div>
  
      </div>,
    ],
    writing: [
      <div key="writing-part1">
                <div className="ielts-container">
                    <div className="left-column">
                         <h2>Task 1.</h2>
              <h3>
                You should spend about 20 minutes on <strong>Task-1</strong>
              </h3>
              {/* <img
                src={myImage}
                alt="Writing Task 1"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              /> */}
                    </div>
   <div className="right-column">
            <textarea
    className="textarea"
  //  value={}
  //  onChange={}
   placeholder="Write your Response here"
style={{width: "100%",height: "100%",padding: "10px",fontSize: "16px",borderRadius: "6px",border: "1px solid #ccc",
                  resize: "none",
                }}
                        />
                    </div>
                </div>
            
</div>,
      <div key="writing-part2">
                      <div className="ielts-container">
                    <div className="left-column">
                         <h2>Task 2.</h2>
              <h3>
                You should spend about 40 minutes on <strong>Task-2</strong>
              </h3>
              {/* <img
                src={myImage}
                alt="Writing Task 1"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              /> */}
                    </div>
   <div className="right-column">
            <textarea
    className="textarea"
  //  value={allAnswers.part1?.writing1 || ''}
  //  onChange={(e)=>handleAnswerChange('section', 'part1', 'writing1', e.target.value)}
   placeholder="Write your Response here"
style={{width: "100%",height: "100%",padding: "10px",fontSize: "16px",borderRadius: "6px",border: "1px solid #ccc",
                  resize: "none",
                }}
                        />
                    </div>
                </div>
      </div>,
    ],
  };

  // Handle leaving test safely
  const handleNavigateBack = () => {
    if (
      window.confirm(
        "All progress will be lost if you leave this page. Are you sure?"
      )
    ) {
      navigate("/ielts-dash");
    }
  };

  return (
    <div className="ielts-wrapper">
      {/* Scrollable content */}
      <div className="part-content">
        {partsContent[section][part - 1]}
      </div>

      {/* Bottom bar */}
      <div className="bottom-bar">
        {/* Back to dashboard */}
        <button
          className="back-btn"
          onClick={handleNavigateBack}
          > Back
        </button>

        {/* Sections & Parts */}
        {Object.entries(testStructure).map(([sec, totalParts]) => (
          <div key={sec} className="bottom-section">
            {/* Section button */}
            <button
              className={`section-btn ${section === sec ? "active" : ""}`}
              onClick={() => {
                setSection(sec);
                setPart(1);
              }}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>

            {/* Part buttons */}
            {[...Array(totalParts)].map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  className={`part-btn ${
                    section === sec && part === p ? "active" : ""
                  }`}
                  onClick={() => {
                    setSection(sec);
                    setPart(p);
                  }}
                >
                  {p}
                </button>
              );
            })}
          </div>
        ))}

        {/* End test button */}
        <button className="end-btn" onClick={()=>handleSubmit()}>
          End Test
        </button>
      </div>
    </div>
  );
};

export default IELTSTest3;
