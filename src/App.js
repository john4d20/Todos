import './App.css';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import UnDoneList from './components/UnDoneList';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  
  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/done">Done</Link>
            </li>
            <li>
              <Link to="/undone">Undone</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
