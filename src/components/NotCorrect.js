const NotCorrect = (isSubmitted, isCorrected) => {
    return (
        <div className="submit_container">
            <p>오답입니다!</p>
            <div className='row_dircetion_div'>
            <button className="submit skip" onClick={() => alert("skip합니다")}>skip</button>
            <button className="submit retry" onClick={() => {
                isCorrected=0
                isSubmitted=false
                // 이대로 set 시켜야 랜더링 없이도 화면에 뜰 듯
                }}>재도전</button>
            </div>
        </div>
      );
    }; 


export default NotCorrect;