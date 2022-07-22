import AnswerSelect_4 from "./components/AnswerSelect";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Quiz from "./components/Quiz";
const MultipleChoiceQ = () => {

    

    return (
      <div className="MultipleChoiceQ">
        {/* Header 코드 */}
        <Header headText={"[선택]Text와 Comparison"} />
        {/* Progress bar 코드 */}
        <ProgressBar />

        {/* 문제 코드 */}
        <Quiz quiz_list/>
        {/* choices & submit 코드 */}
        <AnswerSelect_4 answer1={"<class 'bool'>"} answer2={"<class 'str'>"} answer3={"<class 'float'>"} answer4={"<class 'lst'>"}/>
      </div>
    );    
}
export default MultipleChoiceQ;