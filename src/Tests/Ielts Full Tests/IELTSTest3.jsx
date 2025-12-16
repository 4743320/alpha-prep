import React, { useState } from "react";
import '../../styles/IeltsTest/ieltstest.css'
import { useNavigate } from "react-router-dom";

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
      <div key="listening-part2">
        {/* Listening Part 1 */}
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
  //  onChange={(e)=>handleAnswerChange('part1', 'writing1', e.target.value)}
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
