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

const questions36to40 = [
  { id: 36, text: "The tone of the content we post on social media tends to reflect the nature of the posts in our feeds." },
  { id: 37, text: "Phones have a greater impact on our stress levels than other electronic media devices." },
  { id: 38, text: "The more we read about a stressful public event on social media, the less able we are to take the information in." },
  { id: 39, text: "Stress created by social media posts can lead us to take unnecessary precautions." },
  { id: 40, text: "Our tendency to be affected by other people's moods can be used in a positive way." },
];


// Drop Down A- G

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
      <option value="G">G</option>

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


const questions1to6 = [
  { id: 1, text: "The kakapo can live for over 100 years." },
  { id: 2, text: "Male kakapos take part in caring for the chicks." },
  { id: 3, text: "European colonisers helped increase the kakapo population." },
  { id: 4, text: "Resolution Island remained predator-free." },
  { id: 5, text: "The Recovery Plan was launched in 2000." },
  { id: 6, text: "Possums were a threat to the kakapo population." },
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

const IeltsReadingTest1 = () => {
    const [currentPart, setCurrentPart] =useState(0)
    const[allAnswers, setAllAnswers]=  useState({
        "part1":{       },
        "part2":{ },
        "part3":{        }
    })

    const handleAnswerChange = (part, name, value)=>{
        setAllAnswers((prev)=>({...prev, [part]:{...prev[part],[name]:value}}))
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
        <h2><strong>Questions 1-6</strong></h2><br />
        <p>
          Do the following statements agree with the information given in Reading Passage 1?
          <br />
          In boxes 1-6 on your answer sheet, choose:
        </p>
        <div className="tf">
          <h3>TRUE: if the statement agrees with the information</h3>
          <h3>FALSE: if the statement contradicts the information</h3>
          <h3>NOT GIVEN: <i>if there is no information on this</i></h3>
        </div><br />
{/* TRUE/FALSE/NOT GIVEN Questions */}
 {questions1to6.map((q) => (
            <div className="question-block" key={q.id}>
              <p><strong>{q.id}:</strong> {q.text}</p>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    value="True"
                    checked={allAnswers.part1[`q${q.id}`] === "True"}
                    onChange={(e) => handleAnswerChange('part1', e.target.name, e.target.value)}
                  /> TRUE
                </label>

                <label>
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    value="False"
                    checked={allAnswers.part1[`q${q.id}`] === "False"}
                    onChange={(e) => handleAnswerChange('part1', e.target.name, e.target.value)}
                  /> FALSE
                </label>

                <label>
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    value="Not Given"
                    checked={allAnswers.part1[`q${q.id}`] === "Not Given"}
                    onChange={(e) => handleAnswerChange('part1', e.target.name, e.target.value)}
                  /> NOT GIVEN
                </label>
              </div>
            </div>
          ))}
                      {/* FILL-IN Questions 7–14 */}
        <div className="question-block">
          <p>
            7. Kakapo diet consists of fern fronds, various parts of a tree and 
                  <input
                  type='text'
                  placeholder='7'
                  value={allAnswers.part1.q7 || ''}
                  onChange={(e)=>handleAnswerChange('part1',e.target.name,e.target.value)}
                  />
                  </p>
          <p>
            9. Kakapo nests are created in 
            <input
              className="inline-blank"
              type="text"
              name="q9"
              value={allAnswers.part1.q9 || ""}
              onChange={(e)=>handleAnswerChange('part1', e.target.name,e.target.value)}
            /> where eggs are laid.
          </p>
          <p>
            10. After arrival of Polynesian settlers, the kakapo were used to make 
            <input
              className="inline-blank"
              type="text"
              name="q10"
              value={allAnswers.part1.q10 || ""}
              onChange={(e)=>handleAnswerChange('part1', e.target.name,e.target.value)}
            />.
          </p>
          <p>
            11. European colonisers introduced 
            <input
              className="inline-blank"
              type="text"
              name="q11"
              value={allAnswers.part1.q11 || ""}
              onChange={(e)=>handleAnswerChange('part1', e.target.name,e.target.value)}
            /> that ate the kakapo's food sources.
          </p>
          <p>
            12. A sighting of a female kakapo on Rakiura Island was reported in 
            <input
              className="inline-blank"
              type="text"
              name="q12"
              value={allAnswers.part1.q12 || ""}
              onChange={(e)=>handleAnswerChange('part1', e.target.name,e.target.value)}
            />.
          </p>
          <p>
            13. The Recovery Plan included an increase in 
          <input
          type='text'
          placeholder='13'
          value={allAnswers.part1.q13 || ''}
          name='q13'
          onChange={(e)=>handleAnswerChange('part1', e.target.name,e.target.value)} 
          />
</p>
          <p>
            14. The plan aims to maintain the involvement of 
            <input
              className="inline-blank"
              type="text"
              name="q14"
              value={allAnswers.part1.q14 || ""}
              onChange={(e)=>handleAnswerChange('part1', e.target.name,e.target.value)}
            /> in protection efforts.
          </p>
        </div>
      </div>
    </div>
        </div>,
        <div key='part2'>
          <div className="ielts-container">
       <div className="left-column">
        <h2>Passage 2.</h2> <br/>
        <h3>You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.

Return of the elm: reintroducing the beloved tree to Britain
<br/>
Mark Rowe investigates attempts to reintroduce elms to Britain
</h3><br/>
        <p>
          A<br/>

Around 25 million elms, accounting for 90% of all elm trees in the UK, died during the 1960s and '70s of Dutch elm disease.In the aftermath, the elm, once so dominant in the British landscape, was largely forgotten.However, there's now hope the elm may be reintroduced to the countryside of central and southern England.Any reintroduction will start from a very low base."The impact of the disease is difficult to picture if you hadn't seen what was there before," says Matt Elliot of the Woodland Trust."You look at old photographs from the 1960s and it's only then that you realise the impact [elms had]...They were significant, large trees...then they were gone."

B<br/>

The disease is caused by a fungus that blocks the elms' vascular (water, nutrient and food transport) system, causing branches to wilt and die.A first epidemic, which occurred in the 1920s, gradually died down, but in the '70s a second epidemic was triggered by shipments of elm from Canada.The wood came in the form of logs destined for boat building and its intact bark was perfect for the elm bark beetles that spread the deadly fungus.This time, the beetles carried a much more virulent strain that destroyed the vast majority of British elms.

C<br/>

Today, elms still exist in the southern English countryside but mostly only in low hedgerows between fields."We have millions of small elms in hedgerows but they get targeted by the beetle as soon as they reach a certain size," says Karen Russell, co-author of the report 'Where we are with elm'.Once the trunk of the elm reaches 10-15 centimetres or so in diameter, it becomes a perfect size for beetles to lay eggs and for the fungus to take hold.Yet mature specimens have been identified, in counties such as Cambridgeshire, that are hundreds of years old, and have mysteriously escaped the epidemic.

The key, Russell says, is to identify and study those trees that have survived and work out why they stood tall when millions of others succumbed.Nevertheless, opportunities are limited as the number of these mature survivors is relatively small."What are the reasons for their survival?" asks Russell."Avoidance, tolerance, resistance?We don't know where the balance lies between the three.I don't see how it can be entirely down to luck."

D<br/>

For centuries, elm ran a close second to oak as the hardwood tree of choice in Britain and was in many instances the most prominent tree in the landscape.Not only was elm common in European forests, it became a key component of birch, ash and hazel woodlands.The use of elm is thought to go back to the Bronze Age, when it was widely used for tools.Elm was also the preferred material for shields and early swords.In the 18th century, it was planted more widely and its wood was used for items such as storage crates and flooring.It was also suitable for items that experienced high levels of impact and was used to build the keel of the 19th-century sailing ship Cutty Sark as well as mining equipment.

E<br/>

Given how ingrained elm is in British culture, it's unsurprising the tree has many advocates.Amongst them is Peter Bourne of the National Elm Collection in Brighton."I saw Dutch elm disease unfold as a small boy," he says."The elm seemed to be part of rural England, but I remember watching trees just lose their leaves and that really stayed with me."Today, the city of Brighton's elms total about 17,000.Local factors appear to have contributed to their survival.Strong winds from the sea make it difficult for the determined elm bark beetle to attack this coastal city's elm population.However, the situation is precarious."The beetles can just march in if we're not careful, as the threat is right on our doorstep," says Bourne.

F<br/>

Any prospect of the elm returning relies heavily on trees being either resistant to, or tolerant of, the disease.This means a widespread reintroduction would involve existing or new hybrid strains derived from resistant, generally non-native elm species.A new generation of seedlings have been bred and tested to see if they can withstand the fungus by cutting a small slit on the bark and injecting a tiny amount of the pathogen."The effects are very quick," says Russell."You return in four to six weeks and trees that are resistant show no symptoms, whereas those that are susceptible show leaf loss and may even have died completely."

G<br/>

All of this raises questions of social acceptance, acknowledges Russell."If we're putting elm back into the landscape, a small element of it is not native - are we bothered about that?"For her, the environmental case for reintroducing elm is strong."They will host wildlife, which is a good thing."Others are more wary."On the face of it, it seems like a good idea," says Elliot.The problem, he suggests, is that, "You're replacing a native species with a horticultural analogue*.You're effectively cloning."There's also the risk of introducing new diseases.Rather than plant new elms, the Woodland Trust emphasises providing space to those elms that have survived independently."Sometimes the best thing you can do is just give nature time to recover... over time, you might get resistance," says Elliot.

* horticultural analogue: a cultivated plant species that is genetically similar to an existing species

        </p>
      </div>



      {/* RIGHT COLUMN */}
      <div className="right-column">
        <h2><strong>Questions 14–18</strong></h2><br />
        <p>
          Reading Passage 2 has seven sections, A–G.  
          Which section contains the following information?  
          Choose the correct letter, A–G, in boxes 14–18 on your answer sheet.  
          <br /><strong>NB:</strong> You may use any letter more than once.
        </p>
            <div className="question-block">

              <p>14. Research problems from few surviving elms<DropDown part='part2' id={14} allAnswers={allAnswers}  handleAnswerChange={handleAnswerChange}/></p>
              <p>15. Difference of opinion about reintroducing elms <DropDown part='part2'  id={15} allAnswers={allAnswers}  handleAnswerChange={handleAnswerChange}/></p>
          <p>16. How Dutch elm disease entered Britain <DropDown part='part2' id={16} allAnswers={allAnswers}  handleAnswerChange={handleAnswerChange}/></p>
          <p>17. Conditions allowing a location to escape disease <DropDown part='part2'  id={17} allAnswers={allAnswers}  handleAnswerChange={handleAnswerChange}/></p>
          <p>18. Stage at which young elms become vulnerable <DropDown part='part2' id={18} allAnswers={allAnswers}  handleAnswerChange={handleAnswerChange}/></p>
            </div>
                <h3><strong>Questions 19–23</strong></h3>
        <p>
          Look at the following statements (19–23) and the list of people below.  
          Match each statement with the correct person, A–C.  
          Choose the correct letter, A–C, in boxes 19–23 on your answer sheet.
        </p>

        <div className="question-block">
          <p>19. Prefers natural recovery over intervention <Dropdown2 part='part2' id={19} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>20. Discusses elm’s role in history <Dropdown2 part='part2' id={20} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>21. Recalls seeing Dutch elm disease effects <Dropdown2 part='part2' id={21} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>22. Mentions scientific resistance tests <Dropdown2 part='part2' id={22} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>23. Says research opportunities are limited <Dropdown2 part='part2' id={23} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
        </div>
                <h3><strong>Questions 24–26</strong></h3>
        <p>
          Complete the summary. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.  
        </p>

        <div className="question-block">
          <p>24. Most popular tree before elm was <BlankInput part= 'part2' id={24} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>25. In 18th century, elm wood used for boxes and <BlankInput part= 'part2' id={25} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>26. Elm used in mining and Cutty Sark’s <BlankInput part= 'part2' id={26} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
        </div>
      </div>
    </div>
        </div>,
        <div key='part3'>

          <div className="ielts-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <h2>Passage 3</h2>
        <br />
        <h3>
          You should spend about 20 minutes on Questions 27-40, which are based on Reading Passage 3 below.
        </h3>
        <br />
   <p>
          Some of the most important decisions of our lives occur while we're feeling stressed and anxious.
          From medical decisions to financial and professional ones, we are all sometimes required to weigh up information under stressful conditions.
          But do we become better or worse at processing and using information under such circumstances?

          My colleague and I, both neuroscientists, wanted to investigate how the mind operates under stress, so we visited some local fire stations.
          Firefighters' workdays vary quite a bit.
          Some are pretty relaxed; they'll spend their time washing the truck, cleaning equipment, cooking meals and reading.
          Other days can be hectic, with numerous life-threatening incidents to attend to; they'll enter burning homes to rescue trapped residents, and assist with medical emergencies.
          These ups and downs presented the perfect setting for an experiment on how people's ability to use information changes when they feel under pressure.

          We found that perceived threat acted as a trigger for a stress reaction that made the task of processing information easier for the firefighters - but only as long as it conveyed bad news.

          This is how we arrived at these results.
          We asked the firefighters to estimate their likelihood of experiencing 40 different adverse events in their life, such as being involved in an accident or becoming a victim of card fraud.
          We then gave them either good news (that their likelihood of experiencing these events was lower than they'd thought) or bad news (that it was higher) and asked them to provide new estimates.

          People are normally quite optimistic - they will ignore bad news and embrace the good.
          This is what happened when the firefighters were relaxed; but when they were under stress, a different pattern emerged.
          Under these conditions, they became hyper-vigilant to bad news, even when it had nothing to do with their job (such as learning that the likelihood of card fraud was higher than they'd thought), and altered their beliefs in response.
          In contrast, stress didn't change how they responded to good news (such as learning that the likelihood of card fraud was lower than they'd thought).

          Back in our lab, we observed the same pattern in students who were told they had to give a surprise public speech, which would be judged by a panel, recorded and posted online.
          Sure enough, their cortisol levels spiked, their heart rates went up and they suddenly became better at processing unrelated, yet alarming, information about rates of disease and violence.

          When we experience stressful events, a physiological change is triggered that causes us to take in warnings and focus on what might go wrong.
          Brain imaging reveals that this 'switch' is related to a sudden boost in a neural signal important for learning, specifically in response to unexpected warning signs, such as faces expressing fear.

          Such neural engineering could have helped prehistoric humans to survive.
          When our ancestors found themselves surrounded by hungry animals, they would have benefited from an increased ability to learn about hazards.
          In a safe environment, however, it would have been wasteful to be on high alert constantly.
          So, a neural switch that automatically increases or decreases our ability to process warnings in response to changes in our environment could have been useful.
          In fact, people with clinical depression and anxiety seem unable to switch away from a state in which they absorb all the negative messages around them.

          It is also important to realise that stress travels rapidly from one person to the next.
          If a co-worker is stressed, we are more likely to tense up and feel stressed ourselves.
          We don't even need to be in the same room with someone for their emotions to influence our behaviour.
          Studies show that if we observe positive feeds on social media, such as images of a pink sunset, we are more likely to post uplifting messages ourselves.
          If we observe negative posts, such as complaints about a long queue at the coffee shop, we will in turn create more negative posts.

          In some ways, many of us now live as if we are in danger, constantly ready to tackle demanding emails and text messages, and respond to news alerts and comments on social media.
          Repeatedly checking your phone, according to a survey conducted by the American Psychological Association, is related to stress.
          In other words, a pre-programmed physiological reaction, which evolution has equipped us with to help us avoid famished predators, is now being triggered by an online post.
          Social media posting, according to one study, raises your pulse, makes you sweat, and enlarges your pupils more than most daily activities.

          The fact that stress increases the likelihood that we will focus more on alarming messages, together with the fact that it spreads extremely rapidly, can create collective fear that is not always justified.
          After a stressful public event, such as a natural disaster or major financial crash, there is often a wave of alarming information in traditional and social media, which individuals become very aware of.
          But that has the effect of exaggerating existing danger.
          And so, a reliable pattern emerges - stress is triggered, spreading from one person to the next, which temporarily enhances the likelihood that people will take in negative reports, which increases stress further.
          As a result, trips are cancelled, even if the disaster took place across the globe; stocks are sold, even when holding on is the best thing to do.

          The good news, however, is that positive emotions, such as hope, are contagious too, and are powerful in inducing people to act to find solutions.
          Being aware of the close relationship between people's emotional state and how they process information can help us frame our messages more effectively and become conscientious agents of change.
        </p>

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
        {/* MCQs 27–30 */}
        <h3><strong>Questions 27–30</strong></h3>
        <p>Choose the correct letter <strong>A, B, C, or D</strong>.</p>
            {
              questions27to30.map((q)=>(
                <div key={q.id} className="question-block">
                  <p className="mcq-question"><strong>{q.id}.</strong> {q.text}</p>
           {q.options.map((text, index) => (
  <label key={index}>
    <input
      type='radio'
      name={`q${q.id}`}
      value={text} // or you can use letters if you define them
      checked={allAnswers.part3[`q${q.id}`] === text}
      onChange={(e)=>handleAnswerChange('part3', e.target.name, e.target.value)}
    />
    {text}
  </label>
))}

                </div>
              ))
            }
             {/* Matching 31–35 */}
        <div className="meowx">
          <h3><strong>Questions 31–35</strong></h3>
          <p>
            Complete each sentence with the correct ending, <strong>A–G</strong>, below.
          </p>
        </div>

        <div className="center-containerx">
          <div className="question-blockx">
            <h4>List of options</h4>
            <p><strong>A.</strong> made them feel optimistic.</p>
            <p><strong>B.</strong> took relatively little notice of bad news.</p>
            <p><strong>C.</strong> responded to negative and positive information in the same way.</p>
            <p><strong>D.</strong> were feeling under stress.</p>
            <p><strong>E.</strong> put them in a stressful situation.</p>
            <p><strong>F.</strong> behaved in a similar manner, regardless of the circumstances.</p>
          </div>
        </div>

        <div className="dropdown-blockx">
          <p>31. At times when they were relaxed, the firefighters usually <DropdownPt3 part='part3' id={31} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>32. The researchers noted that when the firefighters were stressed, they <DropdownPt3 part='part3' id={32} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>33. When the firefighters were told good news, they always <DropdownPt3 part='part3' id={33} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>34. The students' cortisol levels and heart rates were affected when the researchers <DropdownPt3 part='part3' id={34} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>35. In both experiments, negative information was processed better when the subjects <DropdownPt3 part='part3' id={36} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
        </div>
        
            {/* T/F/NG 36–40 */}
        <h2><strong>Questions 36–40</strong></h2>
        <p>
          Do the following statements agree with the information given in Reading Passage 3?
        </p>
        {/* <div className="tf">
          <h3>TRUE: if the statement agrees with the information</h3>
          <h3>FALSE: if the statement contradicts the information</h3>
          <h3>NOT GIVEN: <i>if there is no information on this</i></h3>
        </div> */}

             <div className="tf">
    <h3>TRUE: if the statement agrees with the information</h3>
    <h3>FALSE: if the statement contradicts the information</h3>
    <h3>NOT GIVEN: if there is no information on this</h3>
  </div><br />

  {questions36to40.map((q) => (
    <div className="question-block" key={q.id}>
      <p><strong>{q.id}.</strong> {q.text}</p>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name={`q${q.id}`}
            value="True"
            checked={allAnswers.part3[`q${q.id}`] === "True"}
            onChange={(e) => handleAnswerChange('part3', e.target.name, e.target.value)}
          /> TRUE
        </label>
        <label>
          <input
            type="radio"
            name={`q${q.id}`}
            value="False"
            checked={allAnswers.part3[`q${q.id}`] === "False"}
            onChange={(e) => handleAnswerChange('part3', e.target.name, e.target.value)}
          /> FALSE
        </label>
        <label>
          <input
            type="radio"
            name={`q${q.id}`}
            value="Not Given"
            checked={allAnswers.part3[`q${q.id}`] === "Not Given"}
            onChange={(e) => handleAnswerChange('part3', e.target.name, e.target.value)}
          /> NOT GIVEN
        </label>
      </div>
    </div>
  ))}
</div>
    </div>
        </div>,


        
    ]


        const handleEndTest=()=>{
          let totalScore = 0
          let partScores = {}
          for(let part in correctAnswers){
            let partCorrect = 0
            for (let qid in correctAnswers[part]){
              if(allAnswers[part]?.[qid] === correctAnswers[part][qid]){
                partScores ++
              }
            }
            partScore[part] = partCorrect

            totalScore += partCorrect
          }
 
 console.log("Total Score:", totalScore);
  console.log("Part-wise Scores:", partScores);
        console.log(JSON.stringify(allAnswers,null,2))
        alert("Module Over")
        
    }


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
export default IeltsReadingTest1