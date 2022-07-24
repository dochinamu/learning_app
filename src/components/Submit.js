import React from 'react'

const Submit = ({isAnswered, isSubmitted, marking}) => {
  return (
    <div className="submit_container">
        <button
          className="submit"
          style={{
            color: isAnswered ? "white" : "gray",
            backgroundColor: isAnswered ? "skyblue" : "white",
          }}
          onClick={() => {
            if (isAnswered) {
              marking();
            }
          }}
        >
          제출하기
        </button>
    </div>
  );
}; 



export default Submit;