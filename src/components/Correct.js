import React from 'react'
import {Link} from 'react-router-dom';


const Correct = () => {
  return (
    <div className="submit_total_container">
        <p>정답입니다!</p>
        <Link to={"/complete"} className={'submit_container'}>
        <button className="submit">다음으로</button>
        </Link>
    </div>
  );
}; 



export default Correct;



// const btnType = ['positive', 'negative'].includes(type)? type: 'default';
//     return (
//       <button
//         className={["MyButton", `MyButton_${btnType}`].join(" ")}
//         onClick={onClick}
//       >
//         {text}
//       </button>
//     );