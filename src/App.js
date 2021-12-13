import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoGenerator from './components/TodoGenerator';

function App() {
  return (
    <div className="App">
      {/* <TodoList></TodoList> */}
      <TodoGenerator></TodoGenerator>
    </div>
  );
}

export default App;
