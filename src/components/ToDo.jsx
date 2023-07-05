import React, {useState} from 'react'
import {FaTrash} from "react-icons/fa"
import {AiFillEdit} from "react-icons/ai"
import "./styleApp.css";
import ToDoPage from './ToDoPage';


function ToDo({todos, completeTodo, removeTodo, updateTodos}) {
    const[edit, setEdit]=useState({
        id:null,
        value: ''
    })

    const submitedit = value => {
      updateTodos(edit.id, value)
      setEdit({
        id: null,
        value: ''
      })
    }

    if(edit.id){
      return <ToDoPage edit={edit} onSubmit={submitedit} />
    }
    
    return todos.map((todo, index) => {
        return (
        <div className="inbox todoline" id="todos">
          <div className={todo.isComplete ? "todo-row complete" : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
        </div>
            <div className="icons todoline">
              <FaTrash className="trash-icon" onClick={() => removeTodo(todo.id)}/>
              <AiFillEdit className="edit-icon" onClick={() =>setEdit({id: todo.id, value: todo.text}) }/>
            </div>
          </div>
        );
      });
    }

export default ToDo