import React, {useState} from 'react'
import ToDopage from './ToDoPage';
import ToDo from './ToDo';
import "./styleApp.css";

function ToDoList() {
    const [todos, setTodos]=useState([]);

    const addToDo = todo =>{
      if(!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }

      const newToDos = [todo, ...todos]

      setTodos(newToDos)
      console.log(...todos);
    } 

    const removeTodo = id => {
      const removeArr= [...todos].filter(todo =>todo.id !== id);
      setTodos(removeArr);
    }

    const updateTodos = (todoId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return
      }
      setTodos(prev => prev.map(item => (item.id === todoId ? { ...item, text: newValue.text }: item)))
    }

    const completeTodo = id =>{
      let updateTodos = todos.map(todo =>{
        if(todo.id === id){
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      setTodos(updateTodos);
    }

    
  return (
    <><div id="container">
      <h1 className='inbox' id="openLine">What's on your mind today?</h1>
      <ToDopage onSubmit={addToDo} />
    </div><div id="container1">
        <ToDo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo} 
          updateTodos={updateTodos} />
      </div></>

    
  )
}

export default ToDoList;