import React from 'react'

const BlankInput = ({ section, part, id, allAnswers, handleAnswerChange }) => {

  const handleChange = (e) => {
    handleAnswerChange(section, part, e.target.name, e.target.value)
  }

  return (
    <input
      type="text"
      name={`q${id}`} 
      value={allAnswers[section]?.[part]?.[`q${id}`] || ''}
      onChange={handleChange}
      className='blank-input'
      placeholder={`${id}`}
    />
  )
}

export default BlankInput
