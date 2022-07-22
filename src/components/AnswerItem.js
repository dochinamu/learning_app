import React from 'react'

const AnswerItem = ({content, userSelection, handleUserClick}) => {
  return (
    <div>
      <button className="choice" onClick={() => handleUserClick(userSelection)}>
        {content}
      </button>
    </div>
  );
}
export default AnswerItem