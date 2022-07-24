import React,{useState, useEffect }from 'react'
import './TodoInput.css'
import axios from 'axios'

function TodoInput() {
    const [text, setText] = useState("")
    const [isUpdating, setUpdating] = useState("")
    

    const addUpdate = () => {
        if(isUpdating === "") {
          axios.post("http://localhost:5000/api/todo", {text})
          .then((res) => {
            setText("");
            setUpdating("");
          })
          .catch((err) => console.log(err))
        } else {
          axios.post("http://localhost:5000/api/todo", {_id: isUpdating,text})
          .then((res) => setText(""))
          .catch((err) => console.log(err))

        }
      }

  return (
    <div >
        <div className="title">
            <h1>To Do App</h1>
        </div>
        <div className='todo-input' >
            <input type="text" placeholder="Enter todo item" value={text} onChange={(e) => setText(e.target.value)}/>
            <button className='button' onClick={addUpdate}>Add</button>
        </div>
    </div>
  )
}

export default TodoInput