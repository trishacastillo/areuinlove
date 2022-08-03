import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {useState} from "react";
import Home from './Home';
import Footer from './Footer';

function App() {
  const questions=[
    {
      questionsText:"Do you feel excited about seeing this person?",
      answerOptions:[
        {answerText: "Always", value: 5},
        {answerText: "Sometimes", value: 3},
        {answerText: "Not At All", value: 2},
      ],
    },
    {
      questionsText:"Is this person always in your head?",
      answerOptions:[
        {answerText: "Yes", value: 5},
        {answerText: "Occasionally", value: 3},
        {answerText: "Not Really", value: 2},
      ],
    },
    {
      questionsText:"Do you feel nervous whenever this person is around?",
      answerOptions:[
        {answerText: "Yes", value: 5},
        {answerText: "No", value: 4},
      ],
    },
    {
      questionsText:"Having trouble saying NO to this person?",
      answerOptions:[
        {answerText: "Yes", value: 5},
        {answerText: "Sometimes", value: 3},
        {answerText: "Not at all", value: 2},
      ],
    },
    {
      questionsText:"Do you see this person in your future?",
      answerOptions:[
        {answerText: "Yes", value: 5},
        {answerText: "No", value: 3},
      ],
    },
    {
      questionsText:"Do you trust this person?",
      answerOptions:[
        {answerText: "I don't trust anyone", value: 1},
        {answerText: "Maybe 80% or 75%", value: 3},
        {answerText: "Yes, Absolutely", value: 5},
      ],
    },
    {
      questionsText:"Do you care if they are happy?",
      answerOptions:[
        {answerText: "Yes", value: 5},
        {answerText: "I don't really care", value: 2},
        {answerText: "For most part", value: 3},
      ],
    },
    {
      questionsText:"Did this person lift up your mood?",
      answerOptions:[
        {answerText: "Yes", value: 5},
        {answerText: "Sometimes", value: 3},
        {answerText: "No", value: 2},
      ],
    },
    {
      questionsText:"If they ask you to spend your free time would you say yes?",
      answerOptions:[
        {answerText: "No even I have a lot", value: 5},
        {answerText: "Absolutely", value: 3},
        {answerText: "Maybe, some of it", value: 2},
      ],
    },
    {
      questionsText:"Is this person reminding you of a thing or places?",
      answerOptions:[
        {answerText: "Yes", value: 5},
        {answerText: "No", value: 2},
      ],
    },
    {
      questionsText:"Does sacrificing something for them bother you?",
      answerOptions:[
        {answerText: "Im not giving anything", value: 2},
        {answerText: "Not really", value: 3},
        {answerText: "Doesn't bother me at all", value: 5},
      ],
    },
    {
      questionsText:"Do you find yourself collecting information about what this person likes or love?",
      answerOptions:[
        {answerText: "Yes", value: 5},
        {answerText: "No", value: 1},
      ],
    },
    {
      questionsText:"Do your friends noticing something about you and this person?",
      answerOptions:[
        {answerText: "Yes", value: 5},
        {answerText: "I keep it a secret", value: 4},
        {answerText: "No", value: 2},
      ],
    },
    {
      questionsText:"Do you find yourself being conscious around this person?",
      answerOptions:[
        {answerText: "All the time", value: 5},
        {answerText: "Not really", value: 2},
        {answerText: "Yes, sometimes", value: 3},
      ],
    },
    {
      questionsText:"Are you scared that things will get messy if you say that you like this person?",
      answerOptions:[
        {answerText: "Yes, once in a while", value: 3},
        {answerText: "Yes, most of the time", value: 5},
        {answerText: "It doesn't bother me", value: 2},
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion]=useState(0);
  const [showResult, setShowResult]=useState(false);
  const [isShown, setIsShown]=useState(true);
  const [points, setPoints]=useState(0);

  const handleButtonNextQuestionClick=(value)=>{
    setPoints(points+value)
    const nextQuestion=currentQuestion+1;
    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion);
    } else{
      setShowResult(true);
    }
    
  }
  const handleButtonNo=()=>{
    setIsShown(false);
  }
  const [isShownMsg, setIsShownMsg] = useState(false);
  const handleClick = () => {
    setIsShownMsg(true);
  };
  const [isShownQuestion, setIsShownQuestion] = useState(false);
  const handleClickStart = () => {
    setIsShownQuestion(true);
  };
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/take-a-test">
          {isShown ? ( 
            <div className='instruction-section'>
              <div style={{display: isShownMsg ? 'none' : 'block'}}>
                <p>Do you have person in mind right now?</p>
                <button onClick={handleButtonNo}>Yes</button>
                <button onClick={handleClick}>No</button>
              </div>
              <div style={{display: isShownMsg ? 'block' : 'none'}}>
                  <p>Opps! Looks like you are not in love to anyone.</p>
                </div>
            </div> ):(
              <div className='instruction-div' style={{display: isShownQuestion ? 'none' : 'block'}}>
               <p>Look at the options presented as the answers to a question and select the one that you believes is the best fit.
              This will be the basis on what or how in love you are to the person in your mind right now.
            </p>
              <button onClick={handleClickStart}>Start</button>
            </div>)}
            {showResult ? (
              <div className='result-section'>You are {Math.round((points/75)*100)}% InLove</div>
            ):(
          <div style={{display: isShownQuestion ? 'block' : 'none'}}>
           <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion+1}</span>/{(questions.length)}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionsText}</div>
            
            <div className='answer-section'>
             {questions[currentQuestion].answerOptions.map((answerOption)=>
             (<button onClick={()=>handleButtonNextQuestionClick(answerOption.value)}>{answerOption.answerText}</button>))}
           </div>
           </div>
          </div>)}
          </Route>
          <Route path="*">
          <Home/>
          </Route>
        </Switch>
      </div>
      <div className='center'><Footer/></div>
    </div>
  </Router>
  );
}

export default App;
