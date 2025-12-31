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
      <option value="">_______</option>
      <option value="i">i</option>
      <option value="ii">ii</option>
      <option value="iii">iii</option>
      <option value="iv">iv</option>
      <option value="v">v</option>
      <option value="vi">vi</option>
      <option value="vii">vii</option>
      {/* <option value="H">H</option>
      <option value="I">I</option> */}
    </select>
  )
}

export default DropDown
