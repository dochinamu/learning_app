import React from 'react'
import completeImg from '../assets/complete.png'
const CompleteScreen = () => {
  return (
    <div className='completeContainer'>
      <div style={{height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h3 style={{fontSize: 40, marginRight: 50}}>CO:DER</h3>
        <h4> 마이페이지</h4>
      </div>
        <img 
          src={ completeImg }
          className="completeImg"
         />
         <p className='subInfo'>위 이미지를 꾹 누르면 저장할 수 있어요!</p>
         <button className='complete_button'><text className='complete_button_text'>레슨 완료하기</text></button>
    </div>
  )
}

export default CompleteScreen