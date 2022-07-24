const Quiz = ({quiz_list}) => {
  
    return (
      <div className="question_container">
        <p className="question">{quiz_list[0].question1}</p>
        <p className="question">{quiz_list[0].question2}</p>
        
      </div>
    );
};

export default Quiz;