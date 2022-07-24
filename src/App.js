import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MultipleChoiceQ from './pages/MultipleChoiceQ';
import CompleteScreen from './pages/CompleteScreen';

function App() {
  let quiz_list = [
    {question1: "아래 코드의 출력물은?", question2: `print(type(""))`, answer: '2'}
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MultipleChoiceQ quiz_list={quiz_list} />} />
          <Route path="/complete" element={<CompleteScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
