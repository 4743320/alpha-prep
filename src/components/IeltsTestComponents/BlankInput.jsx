// const BlankInput = ({part,  id, allAnswers, handleAnswerChange })=>{
//     const handleChange = (e)=>{handleAnswerChange(part, e.target.name, e.target.value)}
//     return (
//       <input
//         type='text'
//         name={`q${id}`}
//         value={allAnswers.part2?.[`q${id}`] || ""}
//         onChange={handleChange}
//       />
//     )
//   }

import React from 'react'

const BlankInput = ({part,id,allAnswers, handleAnswerChange}) => {

    const handleChange=(e)=>{
        handleAnswerChange(parent, e.targer.name, e.target.value

        )
    }
  return (
    <input type="text"
    name={'q${id}'} 
    value={allAnswers[part]?.['q${id}'] || ''}
    onChange={handleChange}
    className='blank-input'
    />
  )
}

export default BlankInput