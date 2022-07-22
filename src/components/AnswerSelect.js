import React, {useState} from 'react'
import AnswerItem from './AnswerItem';


const AnswerSelect_4 = ({answer1, answer2, answer3, answer4}) => {
    const [userAnswer, setUserAnswer] = useState("");
    const handleUserClick = (key) => {
        setUserAnswer(key);
        console.log(userAnswer)
    }
    

    return (
      <div><div className="choices_container">
        <AnswerItem userSelection={"1"} content={answer1} handleUserClick={handleUserClick}/>
        <br />
        <AnswerItem userSelection={"2"} content={answer2} handleUserClick={handleUserClick}/>
        <br />
        <AnswerItem userSelection={"3"} content={answer3} handleUserClick={handleUserClick}/>
        <br />
        <AnswerItem userSelection={"4"} content={answer4} handleUserClick={handleUserClick}/>
      </div>
      <div className="submit_container">

      <button className="submit">제출하기</button>
    </div>
    </div>
    );
}

export default AnswerSelect_4