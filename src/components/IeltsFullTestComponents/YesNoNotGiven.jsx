import React from 'react'

const YesNoNotGiven = ({ section, part, id, allAnswers, handleAnswerChange }) => {

  const handleChange = (e) => {
    handleAnswerChange(section, part, e.target.name, e.target.value)
  }

  const options = ['Yes', 'No', 'Not Given']

  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={`q${id}`}
            value={option}
            checked={allAnswers[section]?.[part]?.[`q${id}`] === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  )
}

export default YesNoNotGiven
