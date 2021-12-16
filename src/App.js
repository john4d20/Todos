import './App.css';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import UnDoneList from './components/UnDoneList';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {List} from 'antd'
import "./styles/TodoList.css"

function App() {
  
  return (
    
    <Router>
      <div className="background">
        <nav>
          <ul>
            <List>
              <Link to="/">Home</Link>
            </List>
            <List>
              <Link to="/done">Done</Link>
            </List>
            <List>
              <Link to="/undone">Undone</Link>
            </List>
          </ul>
        </nav>

        <div className="App">
        <Switch>
          <Route path="/done">
            <DoneList></DoneList>
          </Route>
          <Route path="/undone">
            <UnDoneList></UnDoneList>
          </Route>
          <Route path="/">
            <TodoList></TodoList>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
    




  );
}

export default App;
