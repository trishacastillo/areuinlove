import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
           
          </Route>
          <Route path="/create">
           
          </Route>
          <Route path="/blogs/:id">
            
          </Route>
          <Route path="*">
           
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
