import React from 'react'

const AnswerItem = ({content, userSelection, handleUserClick, isSelected}) => {
  return (
      <button className="choice" onClick={() => handleUserClick(userSelection)} style={{ border: isSelected ? '3px solid blue' : '1px solid black'}}>
        {content}
      </button>
  );
}
export default AnswerItem