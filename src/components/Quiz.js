const Quiz = () => {

    const quiz_list = [
        {question1: `아래를 입력했을 때 출력물은?`, question2: `print(type("22"))`, answer: 2}
    ];
    return (
        <div className="question_container">
          <p className="question">{quiz_list[0].question1}</p>
          <p className="question">{quiz_list[0].question2}</p>
        </div>
    );
};

export default Quiz;