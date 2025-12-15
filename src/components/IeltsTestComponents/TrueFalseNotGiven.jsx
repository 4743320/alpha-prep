import React from 'react'

const TrueFalseNotGiven = ({ part, id, allAnswers, handleAnswerChange }) => {
  
  const handleChange=(e)=>{
    handleAnswerChange(parent,e.target.name,e.target.value)
  }

  const options=['True', 'False', "Not Given"]
  
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

export default TrueFalseNotGiven