import React, {useState, udeEffect, useRef, useEffect} from 'react'
import {BsSendPlusFill} from 'react-icons/bs'
import {MdDone} from 'react-icons/md'
import "./styleApp.css";


function ToDoPage(props) {
  const [input, setInput]=useState(props.edit ? props.edit.value : '')

  const ImInput = useRef(null)

  useEffect(() => {
    ImInput.current.focus()
  })

  const handelChange = e =>{
    setInput(e.target.value);
  };

  const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input
    });

    setInput('');
  };

  return (
      <form className='ToDo-form' 
        onSubmit={handleSubmit}>
          {props.edit ? (<>
            <input 
            type='text' 
            placeholder='Need to fix!' 
            value={input} 
            name='text' 
            id='ToDo-input' 
            className='inbox'
            ref={ImInput}
            onChange={handelChange}
            
            autoComplete="off"
          />
          <button className='ToDo-check-button'><MdDone className='plus-icon'/></button>
            </>) : (<>
              <input 
            type='text' 
            placeholder='write it!' 
            value={input} 
            name='text' 
            id='ToDo-input' 
            className='inbox'
            onChange={handelChange}
            ref={ImInput}
            autoComplete="off"
          />
          <button className='ToDo-plus-button'><BsSendPlusFill className='plus-icon'/></button>
            </>)}
          
      </form>
  )
}

export default ToDoPage;
