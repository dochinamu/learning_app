import React, {useState} from 'react'
import AnswerItem from './AnswerItem';
import Correct from './Correct';
import NotCorrect from './NotCorrect';
import Submit from './Submit';


const AnswerSelect_4 = ({answer1, answer2, answer3, answer4, quiz_list}) => {
    const [userAnswer, setUserAnswer] = useState("");
    const handleUserClick = (button_content) => {
        setUserAnswer(button_content);
    }

    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = () => {
      setIsSubmitted(true);
    };
    const [isCorrected, setIsCorrected] = useState(0);

    const marking = () => {
        setIsSubmitted(true);
        if (userAnswer === quiz_list[0].answer) {
          setIsCorrected(true)
          console.log(isCorrected)
        } else if (userAnswer !== quiz_list[0].answer) {
          setIsCorrected(false)
          console.log(isCorrected)
        }
    };
    


    return (
      <div>
        <div className="choices_container">
          <AnswerItem
            userSelection={"1"}
            content={answer1}
            handleUserClick={handleUserClick}
            isSelected={userAnswer === "1"}
          />
          <br />
          <AnswerItem
            userSelection={"2"}
            content={answer2}
            handleUserClick={handleUserClick}
            isSelected={userAnswer === "2"}
          />
          <br />
          <AnswerItem
            userSelection={"3"}
            content={answer3}
            handleUserClick={handleUserClick}
            isSelected={userAnswer === "3"}
          />
          <br />
          <AnswerItem
            userSelection={"4"}
            content={answer4}
            handleUserClick={handleUserClick}
            isSelected={userAnswer === "4"}
          />
          <div>{isCorrected}</div>
          <div>{isSubmitted}</div>
        </div>
        {!isSubmitted &&
        <Submit isAnswered={userAnswer !== ""} marking={marking} isSubmitted={isSubmitted} handleSubmit={handleSubmit}/>}
         {isCorrected === true
          ? <Correct />
          : <NotCorrect isSubmitted={isSubmitted} isCorrected={isCorrected}/>
        }
      </div>
    );
}

export default AnswerSelect_4