import React, { useRef } from 'react'
import './style.css'

interface Props{
  todo: string;  // This is an String which will be passed as Props 
  setTodo: React.Dispatch<React.SetStateAction<string>>; // This is copied from hovering over setTodo in App.tsx (Type of setTodo)
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

// As an Parameter there will be two Props which the Function needs those have the Type Definition
// which are given by the Interface which we created
const InputField = ({todo, setTodo, handleAdd} : Props) => {

  const inputRef = useRef<HTMLInputElement>(null); // How to use useRef (REact Hook) in Typescript

  return (
    <form className='input' onSubmit={(e) => {
       handleAdd(e);
       inputRef.current?.blur(); // How to get the background blurness out after Event is finished (Enter or Button)
    }}>
        <input 
        ref={inputRef}
        value={todo} onChange={(e) => setTodo(e.target.value)}
        type='input' placeholder='Enter a task' className='input_box'/>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
