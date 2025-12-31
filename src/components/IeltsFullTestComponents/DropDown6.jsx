import React from 'react'

const DropDown = ({ section, part, id, allAnswers, handleAnswerChange }) => {

  const handleChange = (e) => {
    handleAnswerChange(section, part, e.target.name, e.target.value)
  }

  return (
    <select
      name={`q${id}`}
      onChange={handleChange}
      value={allAnswers[section]?.[part]?.[`q${id}`] || ''}
    >
      <option value="">{id}_______</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
       <option value="D">D</option>
      {/* <option value="E">E</option>  */}
      {/* <option value="F">F</option>
      <option value="G">G</option> */}
      {/* <option value="H">H</option>
      <option value="I">I</option> */}
    </select>
  )
}

export default DropDown
