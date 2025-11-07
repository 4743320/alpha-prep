import React, { useState } from 'react'
import '../../../styles/ielts.css'
import '../../../styles/misc.css'


/// part 3 dropdown for 31-35

const DropdownPt3=({part, id, allAnswers, handleAnswerChange})=>{
  
  const handleChange=(e)=> handleAnswerChange(part, e.target.name, e.target.value)
  
  return(
    <select name={`q${id}`}
    className='dropdown'
    value={allAnswers.part3?.[`q${id}`] || ''}
    onChange={handleChange}
    >      
       <option value="">____________</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
      <option value="G">G</option>

    </select>
  )

}



// Drop Down A- G for 14-16

const DropDown= ({part, id, allAnswers, handleAnswerChange})=>{

  const handleChange=(e)=>{ handleAnswerChange(part, e.target.name, e.target.value)}

  return(
    <select name={`q${id}`}
     className='dropdown'
     value={allAnswers.part2?.[`q${id}`] || ""}
     onChange={handleChange}
     >
       <option value="">____________</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
   

    </select>
  )
}
// DropDown

  const Dropdown2 =({part, id , allAnswers, handleAnswerChange })=>{
      const handleChange = (e)=>{handleAnswerChange(part, e.target.name, e.target.value )}
  
      return(
        <select
        className='dropdown'
        name={`q${id}`}
        value={allAnswers.part2?.[`q${id}`] || ''}
        onChange={handleChange}
        >
          <option value="">____________</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>


        </select>
      )
  }

  // Blank Input

  const BlankInput = ({part,  id, allAnswers, handleAnswerChange })=>{
    const handleChange = (e)=>{handleAnswerChange(part, e.target.name, e.target.value)}
    return (
      <input
        type='text'
        name={`q${id}`}
        value={allAnswers.part2?.[`q${id}`] || ""}
        onChange={handleChange}
      />
    )
  }


const questions7to13 = [
  {
    id: 7,
    text: "West Indian manatees can be found in a variety of different aquatic habitats.",
  },
  {
    id: 8,
    text: "The Florida manatee lives in warmer waters than the Antillean manatee.",
  },
  {
    id: 9,
    text: "The African manatee's range is limited to coastal waters between the West African countries of Mauritania and Angola.",
  },
  {
    id: 10,
    text: "The extent of the loss of Amazonian manatees in the mid-twentieth century was only revealed many years later.",
  },
  {
    id: 11,
    text: "It is predicted that West Indian manatee populations will fall in the coming decades.",
  },
  {
    id: 12,
    text: "The risk to manatees from entanglement and plastic consumption increased significantly in the period 2009–2020.",
  },
  {
    id: 13,
    text: "There is some legislation in place which aims to reduce the likelihood of boat strikes on manatees in Florida.",
  },
];

const questions27to30 = [
  {
    id: 27,
    text: 'In the first paragraph, the writer introduces the topic of the text by',
    options: [
      'defining some commonly used terms.',
      'questioning a widely held assumption.',
      'mentioning a challenge faced by everyone.',
      'specifying a situation which makes us most anxious.',
    ],
  },
  {
    id: 28,
    text: 'What point does the writer make about firefighters in the second paragraph?',
    options: [
      'The regular changes of stress levels in their working lives make them ideal study subjects.',
      'The strategies they use to handle stress are of particular interest to researchers.',
      'The stressful nature of their job is typical of many public service professions.',
      'Their personalities make them especially well-suited to working under stress.',
    ],
  },
  {
    id: 29,
    text: 'What is the writer doing in the fourth paragraph?',
    options: [
      'explaining their findings',
      'justifying their approach',
      'setting out their objectives',
      'describing their methodology',
    ],
  },
  {
    id: 30,
    text: 'In the seventh paragraph, the writer describes a mechanism in the brain which',
    options: [
      'enables people to respond more quickly to stressful situations.',
      'results in increased ability to control our levels of anxiety.',
      'produces heightened sensitivity to indications of external threats.',
      'is activated when there is a need to communicate a sense of danger.',
    ],
  },
];

const IeltsReadingTest2 = () => {
    const [currentPart, setCurrentPart] =useState(0)
    const[allAnswers, setAllAnswers]=  useState({
        "part1":{       },
        "part2":{ },
        "part3":{        }
    })

    const handleAnswerChange = (part, name, value)=>{
        setAllAnswers((prev)=>({...prev, [part]:{...prev[part],[name]:value}}))
    }

    const handleEndTest=()=>{
        console.log(JSON.stringify(allAnswers,null,2))
        alert("Module Over")
    }

    const parts = [
        <div key='part1'>
            <div className="ielts-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <h2>Passage 1.</h2> <br />
        <h3>
          You should spend about 20 minutes on <strong>Questions 1-13</strong>, 
          which are based on Reading Passage 1 below.
        </h3>

         <p className='para'>
<h2 style={{ textAlign: "center" , marginBottom: "20px"  }}> Manatees </h2>          
  <p>
    Manatees, also known as sea cows, are aquatic mammals that belong to a group
    of animals called <em>Sirenia</em>. This group also contains dugongs. Dugongs
    and manatees look quite alike — they are similar in size, colour and shape,
    and both have flexible flippers for forelimbs. However, the manatee has a
    broad, rounded tail, whereas the dugong's is fluked, like that of a whale.
    There are three species of manatees: the West Indian manatee
    (<em>Trichechus manatus</em>), the African manatee
    (<em>Trichechus senegalensis</em>) and the Amazonian manatee
    (<em>Trichechus inunguis</em>).
  </p>

  <p>
    Unlike most mammals, manatees have only six bones in their neck — most
    others, including humans and giraffes, have seven. This short neck allows a
    manatee to move its head up and down, but not side to side. To see something
    on its left or its right, a manatee must turn its entire body, steering with
    its flippers. Manatees have pectoral flippers but no back limbs, only a tail
    for propulsion. They do have pelvic bones, however — a leftover from their
    evolution from a four-legged to a fully aquatic animal. Manatees share some
    visual similarities to elephants. Like elephants, manatees have thick,
    wrinkled skin. They also have some hairs covering their bodies which help
    them sense vibrations in the water around them.
  </p>

  <p>
    Seagrasses and other marine plants make up most of a manatee's diet.
    Manatees spend about eight hours each day grazing and uprooting plants. They
    eat up to 15% of their weight in food each day. African manatees are
    omnivorous — studies have shown that molluscs and fish make up a small part
    of their diets. West Indian and Amazonian manatees are both herbivores.
  </p>

  <p>
    Manatees' teeth are all molars — flat, rounded teeth for grinding food. Due
    to manatees' abrasive aquatic plant diet, these teeth get worn down and they
    eventually fall out, so they continually grow new teeth that get pushed
    forward to replace the ones they lose. Instead of having incisors to grasp
    their food, manatees have lips which function like a pair of hands to help
    tear food away from the seafloor.
  </p>

  <p>
    Manatees are fully aquatic, but as mammals, they need to come up to the
    surface to breathe. When awake, they typically surface every two to four
    minutes, but they can hold their breath for much longer. Adult manatees
    sleep underwater for 10–12 hours a day, but they come up for air every
    15–20 minutes. Active manatees need to breathe more frequently. It's thought
    that manatees use their muscular diaphragm and breathing to adjust their
    buoyancy. They may use diaphragm contractions to compress and store gas in
    folds in their large intestine to help them float.
  </p>

  <p>
    The West Indian manatee reaches about 3.5 metres long and weighs on average
    around 500 kilogrammes. It moves between fresh water and salt water, taking
    advantage of coastal mangroves and coral reefs, rivers, lakes and inland
    lagoons. There are two subspecies of West Indian manatee: the Antillean
    manatee is found in waters from the Bahamas to Brazil, whereas the Florida
    manatee is found in US waters, although some individuals have been recorded
    in the Bahamas. In winter, the Florida manatee is typically restricted to
    Florida. When the ambient water temperature drops below 20ºC, it takes
    refuge in naturally and artificially warmed water, such as at the warm-water
    outfalls from powerplants.
  </p>

  <p>
    The African manatee is also about 3.5 metres long and found in the sea along
    the west coast of Africa, from Mauritania down to Angola. The species also
    makes use of rivers, with the mammals seen in landlocked countries such as
    Mali and Niger.
  </p>

  <p>
    The Amazonian manatee is the smallest species, though it is still a big
    animal. It grows to about 2.5 metres long and 350 kilogrammes. Amazonian
    manatees favour calm, shallow waters that are above 23ºC. This species is
    found in fresh water in the Amazon Basin in Brazil, as well as in Colombia,
    Ecuador and Peru. All three manatee species are endangered or at a heightened
    risk of extinction. The African manatee and Amazonian manatee are both listed
    as Vulnerable by the International Union for Conservation of Nature (IUCN).
    It is estimated that 140,000 Amazonian manatees were killed between 1935 and
    1954 for their meat, fat and skin, with the latter used to make leather. In
    more recent years, African manatee decline has been tied to incidental
    capture in fishing nets and hunting. Manatee hunting is now illegal in every
    country the African species is found in.
  </p>

  <p>
    The two subspecies of West Indian manatee are listed as Endangered by the
    IUCN. Both are also expected to undergo a decline of 20% over the next 40
    years. A review of almost 1,800 cases of entanglement in fishing nets and of
    plastic consumption among marine mammals in US waters from 2009 to 2020
    found that at least 700 cases involved manatees. The chief cause of death in
    Florida manatees is boat strikes. However, laws in certain parts of Florida
    now limit boat speeds during winter, allowing slow-moving manatees more time
    to respond.
  </p>      </p>

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
              <h2><strong>Questions 1-6</strong></h2><br />
        <h3>Questions 1-6</h3>
        <p>
          Complete the notes below.<br/> Write <strong>ONE WORD AND/OR A NUMBER</strong>from the passage for each answer.
        </p>
        <p>Write your answers in boxes 1-6 on your answer sheet.</p>
 
                      {/* Notes Questions 1-6 */}
      <div className="notes-box">
  <h2 style={{ textAlign: "center" , marginBottom: "20px"  }}></h2>
      
   
  
  <div className="reading-passage">
  <h2 style={{ textAlign: "center" }}>Manatees</h2>

  <h3>Appearance</h3>
  <ul>
    <li>
      look similar to dugongs, but with a differently shaped{" "}
      <input
        type="text"
        name="q1"
        value={allAnswers.part1.q1 || ""}
        placeholder="1"
        onChange={(e) =>
          handleAnswerChange("part1", e.target.name, e.target.value)
        }
      />
    </li>
  </ul>

  <h3>Movement</h3>
  <ul>
    <li>have fewer neck bones than most mammals</li>
    <li>
      need to use their{" "}
      <input
        type="text"
        name="q2"
        value={allAnswers.part1.q2 || ""}
        placeholder="2"
        onChange={(e) =>
          handleAnswerChange("part1", e.target.name, e.target.value)
        }
      />{" "}
      to help turn their bodies around in order to look sideways
    </li>
    <li>
      sense vibrations in the water by means of{" "}
      <input
        type="text"
        name="q3"
        value={allAnswers.part1.q3 || ""}
        placeholder="3"
        onChange={(e) =>
          handleAnswerChange("part1", e.target.name, e.target.value)
        }
      />{" "}
      on their skin
    </li>
  </ul>

  <h3>Feeding</h3>
  <ul>
    <li>
      eat mainly aquatic vegetation, such as{" "}
      <input
        type="text"
        name="q4"
        value={allAnswers.part1.q4 || ""}
        placeholder="4"
        onChange={(e) =>
          handleAnswerChange("part1", e.target.name, e.target.value)
        }
      />
    </li>
    <li>
      grasp and pull up plants with their{" "}
      <input
        type="text"
        name="q5"
        value={allAnswers.part1.q5 || ""}
        placeholder="5"
        onChange={(e) =>
          handleAnswerChange("part1", e.target.name, e.target.value)
        }
      />
    </li>
  </ul>

  <h3>Breathing</h3>
  <ul>
    <li>
      come to the surface for air every 2–4 minutes when awake and every 15–20
      minutes while sleeping
    </li>
    <li>
      may regulate the{" "}
      <input
        type="text"
        name="q6"
        value={allAnswers.part1.q6 || ""}
        placeholder="6"
        onChange={(e) =>
          handleAnswerChange("part1", e.target.name, e.target.value)
        }
      />{" "}
      of their bodies by using diaphragm muscles to store air internally
    </li>
  </ul>
</div>
</div>
   <h2><strong>Questions 1-6</strong></h2><br />
        <p>
          Do the following statements agree with the information given in Reading Passage 1?
          <br />
          Write your answers in boxes 1-6 .
        </p>
         <div className="tf">
          <h3>TRUE: if the statement agrees with the information</h3>
          <h3>FALSE: if the statement contradicts the information</h3>
          <h3>NOT GIVEN: <i>if there is no information on this</i></h3>
        </div><br /> 

        {/* T/F/NG questions7-13 */}

{questions7to13.map((q)=>(
  <div  key ={q.id}className="question-block">

    <p>{q.id}.<strong>{q.text}</strong></p>
    <div className="radio-group">
      <label>

        <input
        type='radio'
        name={`q${q.id}`}
        value="True"
        checked={allAnswers.part1[`q${q.id}`] === 'True'}
        onChange={(e)=>handleAnswerChange('part1', e.target.name, e.target.value)}
        
        /> TRUE
      </label>
      <label>
        <input
        
        name={`q${q.id}`}
        value='False'
        type='radio'
        checked = {allAnswers.part1[`q${q.id}`] === 'False'}
        onChange={(e)=>handleAnswerChange('part1', e.target.name, e.target.value)}

        />
      </label>
      <label>
        <input
        
        name={`q${q.id}`}
        type='radio'
        value='Not Given'
        checked = {allAnswers.part1[`q${q.id}`] === 'Not Given'}
        onChange={(e)=>handleAnswerChange('part1', e.target.name, e.target.value)}

        />
      </label>
    </div>
  </div>
))}

    </div>
    </div>
        </div>,
        <div key='part2'>
          <div className="ielts-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <h2>Passage 1.</h2> <br />
        <h3>
          You should spend about 20 minutes on <strong>Questions 14-26</strong>, 
          which are based on Reading Passage 1 below.
        </h3>

         <p className='para'>
<h2 style={{ textAlign: "center", marginBottom: "20px" }}>Procrastination</h2>

<p><strong>A</strong></p>
<p>
Procrastination is the habit of delaying a necessary task, usually by focusing on less urgent, more enjoyable, and easier activities instead. We all do it from time to time. We might be composing a message to a friend who we have to let down, or putting together an important report for college or work; we're doing our best to avoid doing the job at hand, but deep down we know that we should just be getting on with it. Unfortunately, berating ourselves won't stop us procrastinating again. In fact, it's one of the worst things we can do. This matters because, as my research shows, procrastination doesn't just waste time, but is actually linked to other problems, too.
</p>

<p><strong>B</strong></p>
<p>
Contrary to popular belief, procrastination is not due to laziness or poor time management. Scientific studies suggest procrastination is, in fact, caused by poor mood management. This makes sense if we consider that people are more likely to put off starting or completing tasks that they are really not keen to do. If just thinking about the task threatens our sense of self-worth or makes us anxious, we will be more likely to put it off. Research involving brain imaging has found that areas of the brain linked to detection of threats and emotion regulation are actually different in people who chronically procrastinate compared to those who don't procrastinate frequently.
</p>

<p><strong>C</strong></p>
<p>
Tasks that are emotionally loaded or difficult, such as preparing for exams, are prime candidates for procrastination. People with low self-esteem are more likely to procrastinate. Another group of people who tend to procrastinate are perfectionists, who worry their work will be judged harshly by others. We know that if we don't finish that report or complete those home repairs, then what we did can't be evaluated. When we avoid such tasks, we also avoid the negative emotions associated with them. This is rewarding, and it conditions us to use procrastination to repair our mood. If we engage in more enjoyable tasks instead, we get another mood boost. In the long run, however, procrastination isn't an effective way of managing emotions. The 'mood repair' we experience is temporary. Afterwards, people tend to be left with a sense of guilt that not only increases their negative mood, but also reinforces their tendency to procrastinate.
</p>

<p><strong>D</strong></p>
<p>
So why is this such a problem? When most people think of the costs of procrastination, they think of the toll on productivity. For example, studies have shown that procrastination negatively impacts on student performance. But putting off reading textbooks and writing essays may affect other areas of students' lives. In one study of over 3,000 German students over a six-month period, those who reported procrastinating over their university work were also more likely to engage in study-related misconduct, such as cheating and plagiarism. But the behaviour that procrastination was most closely linked with was using fraudulent excuses to get deadline extensions. Other research shows that employees on average spend almost a quarter of their workday procrastinating, and again this is linked with negative outcomes. In fact, in one US survey of over 22,000 employees, participants who said they regularly procrastinated had less annual income and less employment stability. For every one-point increase on a measure of chronic procrastination, annual income decreased by US$15,000.
</p>

<p><strong>E</strong></p>
<p>
Procrastination also correlates with serious health and well-being problems. A tendency to procrastinate is linked to poor mental health, including higher levels of depression and anxiety. Across numerous studies, I've found people who regularly procrastinate report a greater number of health issues, such as headaches, flu and colds, and digestive issues. They also experience higher levels of stress and poor sleep quality. They are less likely to practise healthy behaviours, such as eating a healthy diet and regularly exercising, and use destructive coping strategies to manage their stress. In one study of over 700 people, I found people prone to procrastination had a 63% greater risk of poor heart health after accounting for other personality traits and demographics.
</p>

<p><strong>F</strong></p>
<p>
Finding better ways of managing our emotions is one route out of the vicious cycle of procrastination. An important first step is to manage our environment and how we view the task. There are a number of evidence-based strategies that can help us fend off distractions that can occupy our minds when we should be focusing on the thing we should be getting on with. For example, reminding ourselves about why the task is important and valuable can increase positive feelings towards it. Forgiving ourselves and feeling compassion when we procrastinate can help break the procrastination cycle. We should admit that we feel bad, but not be overly critical of ourselves. We should remind ourselves that we're not the first person to procrastinate, nor the last. Doing this can take the edge off the negative feelings we have about ourselves when we procrastinate. This can all make it easier to get back on track.
</p>
     </p>

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">

          <h2><strong>Questions 14–18</strong></h2><br />
        <p>
          Reading Passage 2 has six paragraphs, A–F </p>.  
          <p>Which section contains the following information?  
          Choose the correct letter, A–F, in boxes 14–16 on your answer sheet.</p>  
        <p> <br /><strong>NB:</strong> You may use any letter more than once.<br/></p> 
        
            <div className="question-block">

              <p>14. mention of false assumptions about why people procrastinate<DropDown part='part2' id={14} allAnswers={allAnswers}  handleAnswerChange={handleAnswerChange}/></p>
              <p>15. reference to the realisation that others also procrastinate <DropDown part='part2'  id={15} allAnswers={allAnswers}  handleAnswerChange={handleAnswerChange}/></p>
          <p>16. neurological evidence of a link between procrastination and emotion<DropDown part='part2' id={16} allAnswers={allAnswers}  handleAnswerChange={handleAnswerChange}/></p>
         
            </div>
         
              <h2><strong>Questions 17-22</strong></h2><br />
        <h3>Questions 1-6</h3>
        <p>
          Complete the Summary<br/><p>Write <strong>ONE WORD AND/OR A NUMBER</strong>from the passage for each answer.</p> 
        </p>
        <p>Write your answers in boxes 17-22 on your answer sheet.</p>
 
                      {/* Notes Questions 17-22 */}
      <div className="notes-box">
  <h2 style={{ textAlign: "center" , marginBottom: "20px"  }}></h2>
      
   
  
  <div className="reading-passage">
  <h2 style={{ textAlign: "center" }}>What makes us procrastinate?</h2>

            <div className="question-block">

              <p>Many people think that procrastination is the result of
                {" "}
      <input
        type="text"
        name="q17"
        value={allAnswers.part2.q17 || ""}
        placeholder="17"
        onChange={(e) =>
          handleAnswerChange("part2", e.target.name, e.target.value)
        }
      />{" "}
. Others believe it to be the result of an inability to organise time efficiently.</p>
              <p> But scientific studies suggest that procrastination is actually due to poor mood management. The tasks we are most likely to put off are those that could damage our self-esteem or cause us to feel
     {" "}
      <input
        type="text"
        name="q18"
        value={allAnswers.part2.q18 || ""}
        placeholder="18"
        onChange={(e) =>
          handleAnswerChange("part2", e.target.name, e.target.value)
        }
      />{" "}.Research comparing chronic procrastinators with other people even found differences in the brain regions associated with regulating emotions and identifying
{" "}
      <input
        type="text"
        name="q19"
        value={allAnswers.part2.q19 || ""}
        placeholder="19"
        onChange={(e) =>
          handleAnswerChange("part2", e.target.name, e.target.value)
        }
      />{" "}
.

when we think about </p>
          <p>Emotionally loaded and difficult tasks often cause us to procrastinate. Getting ready to take
{" "}
      <input
        type="text"
        name="q20"
        value={allAnswers.part2.q20 || ""}
        placeholder="20"
        onChange={(e) =>
          handleAnswerChange("part2", e.target.name, e.target.value)
        }
      />{" "}

might be a typical example of one such task. People who are likely to procrastinate tend to be either

{" "}
      <input
        type="text"
        name="q21"
        value={allAnswers.part2.q21 || ""}
        placeholder="21"
        onChange={(e) =>
          handleAnswerChange("part2", e.target.name, e.target.value)
        }
      />{" "}
or those with low self-esteem.</p>
<p>
  Procrastination is only a short-term measure for managing emotions. It's often followed by a feeling of
  {" "}
      <input
        type="text"
        name="q22"
        value={allAnswers.part2.q22 || ""}
        placeholder="22"
        onChange={(e) =>
          handleAnswerChange("part2", e.target.name, e.target.value)
        }
      />{" "}
  
  
, which worsens our mood and leads to more procrastination.       
</p>

         
            </div>
 
</div>
</div>
   <h2><strong>Questions 1-6</strong></h2><br />
        <p>
          Do the following statements agree with the information given in Reading Passage 1?
          <br />
          Write your answers in boxes 1-6 .
        </p>
         <div className="tf">
          <h3>TRUE: if the statement agrees with the information</h3>
          <h3>FALSE: if the statement contradicts the information</h3>
          <h3>NOT GIVEN: <i>if there is no information on this</i></h3>
        </div><br /> 

        {/* T/F/NG questions7-13 */}

{questions7to13.map((q)=>(
  <div  key ={q.id}className="question-block">

    <p>{q.id}.<strong>{q.text}</strong></p>
    <div className="radio-group">
      <label>

        <input
        type='radio'
        name={`q${q.id}`}
        value="True"
        checked={allAnswers.part1[`q${q.id}`] === 'True'}
        onChange={(e)=>handleAnswerChange('part1', e.target.name, e.target.value)}
        
        /> TRUE
      </label>
      <label>
        <input
        
        name={`q${q.id}`}
        value='False'
        type='radio'
        checked = {allAnswers.part1[`q${q.id}`] === 'False'}
        onChange={(e)=>handleAnswerChange('part1', e.target.name, e.target.value)}

        />
      </label>
      <label>
        <input
        
        name={`q${q.id}`}
        type='radio'
        value='Not Given'
        checked = {allAnswers.part1[`q${q.id}`] === 'Not Given'}
        onChange={(e)=>handleAnswerChange('part1', e.target.name, e.target.value)}

        />
      </label>
    </div>
  </div>
))}

    </div>
    </div>
        </div>,
        <div key='part3'>

        </div>,


        
    ]



 return (
    <div className="ielts-wrapper">
      {/* Scrollable content */}
      <div className="part-content">{parts[currentPart]}</div>

      {/* Part navigation buttons */}
     <div className="bottom-bar">
  <div className="part-buttons">
    {[0, 1, 2, 3].map((i) => (
      <button
        key={i}
        className={currentPart === i ? "active" : ""}
        onClick={() => setCurrentPart(i)}
      >
        {i + 1}
      </button>
    ))}
  </div>

  <button className="end-btn" onClick={handleEndTest}>
    End Test
  </button>
</div>
    </div>
  );
};
export default IeltsReadingTest2