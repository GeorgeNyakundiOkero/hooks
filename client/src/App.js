import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import TodoInput from './components/input/TodoInput';
import Item from './components/items/Item';
import axios from 'axios'

function App() {
  const [todo, setTodo] = useState([])
  const [isUpdating, setUpdating] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/api/todo")
    .then((res) => setTodo(res.data))
    .catch((err) => console.log(err))

  })
 

  const deleteTodo = (_id) => {}

  const updateTodo =(_id, text) => {
    
  }

  return (
    <div className="App">
      <TodoInput/>
      {todo.map((item) => <Item key={item._id} text={item.text} remove={() =>deleteTodo(item._id)} update={() => updateTodo(item._id, item.text)}/>)}
      
    </div>
  );
}

export default App;
