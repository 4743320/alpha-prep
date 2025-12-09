import React from 'react'

const CategoryCard = ({name, desc, color, onClick, user}) => {

  const handleClick=()=>{
    if(!user){
       alert("❌ You must be logged in to start this test!");
      return
    }
    onClick()
  }
  return (
    <div className="category-card" style={{ borderTop: `5px solid ${color}` }}>
        <h3>{name}</h3>
        <p>{desc}</p>
        <button className="secondary-btn" style={{ backgroundColor: color }} onClick={handleClick}>
            Start Practice
        </button>
    </div>
  )
}

export default CategoryCard