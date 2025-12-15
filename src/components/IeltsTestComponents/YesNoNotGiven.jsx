import React from 'react'

const YesNoNotGiven = ({ part, id, allAnswers, handleAnswerChange }) => {
const handleChange=(e)=>{
    handleAnswerChange(parent,e.target.name,e.target.value)
  }

  const options=['Yes', 'No', "Not Given"]
  
    return (
    <div className="radio-group">

        {options.map((option)=>(
            <label key={option}>
                <input type="radio" 
                name={`q${id}`}
                value={option}
                checked={allAnswers[part]?.[`q${id}`]==option}
                onChange={handleChange}
                />
                {option}
            </label>
        ))}
    </div>
  )
}
export default YesNoNotGiven