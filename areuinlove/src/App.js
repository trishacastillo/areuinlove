import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {useState} from "react";
import Home from './Home';
import Footer from './Footer';

function App() {
  const questions=[
    {
      questionsText:"Do you feel excite seeing this person?",
      answerOptions:[
        {answerText: "Always"},
        {answerText: "Sometimes"},
        {answerText: "Not At All"},
      ]
    }
  ];
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/create">
           
          </Route>
          <Route path="*">
           
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
