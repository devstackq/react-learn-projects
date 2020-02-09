import React, {  useState } from 'react'
import './App.css';
import birdsData from './data/birds'
import ListAnswer from './components/ListOptionAnswer/ListAnswer';
import Question from './components/Question';

function App() {
  const [birds, setBirds] = useState(birdsData);
  const [birdsAudio] = useState(birdsData[0]);
  const [random ] = useState(Math.floor(Math.random() * 6))
const [choiceAnswer, setChoiceAnswer] = useState(null)


return (
      <div>
        <Question
       random = {birdsAudio[random].audio}
       />
      <div>
          {/* {birds.map(item  =>( 
        <ListAnswer 
        birds= {item}
        selectAnswer={setChoiceAnswer}
        randomValue = {random}
        choiceAnswer={choiceAnswer}
        />
          ))} */}
          <ListAnswer
          birds = {birdsAudio}
          selectAnswer={setChoiceAnswer}
        randomValue = {random}
        choice={choiceAnswer}
          />
         </div>
         </div>    
    )
  }

  export default App
