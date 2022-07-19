
const MultipleChoiceQ = () => {
    return (
        <div className="MultipleChoiceQ">
            {/* Header 코드 */}
            <header>
                <h3 className="header_content">객관식-Type과 Comparison</h3>
            </header>
            {/* Progress bar 코드 */}
            <div className="progress_container">
                <progress value="10" max="100"></progress>
            </div>
            {/* 문제 코드 */}
            <div className="question_container">
                <p className="question">아래를 입력했을 때 출력물은?</p>
                <p className="question">print(type("22"))</p>
            </div>
            {/* choices 코드 */}
            <div className="choices_container">
                <button className="choice">&#60;class 'bool'&#62;</button>
                <br/>
                <button className="choice">&#60;class 'str'&#62;</button>
                <br/>
                <button className="choice">&#60;class 'float'&#62;</button>
                <br/>
                <button className="choice">&#60;class 'lst'&#62;</button>
            </div>
            {/* submit 코드 */}
            <div className="submit_container">
                <button className="submit">제출하기</button>
            </div>

        </div>
    )    
}
export default MultipleChoiceQ;