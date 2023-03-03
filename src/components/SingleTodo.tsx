import React, { useEffect, useRef, useState } from 'react'
import { AiFillEdit, AiFillDelete  } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Todo } from '../../typings'
import './style.css'

interface Props {
    todos: Todo[],
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

    // Define States for Editing a Todo
    const [edit, setEdit] = useState<boolean>(false); // This State will be a boolean
    const [editTodo, setEditTodo] = useState<string>(todo.todo); // This State will be a String

    // Function for if the a Task is Done 
    // It takes as a Parametet the ID of the Todo which is a Type of a Number
    const handleDone = (id:number) => {
        // Mapping through the Todo Task and Set the IsDone todo to the Opposite Value which todo has 
        // With this it can switch the state 
        setTodos(todos.map((todo) =>
             todo.id === id  ? {...todo, isDone: !todo.isDone}: todo));
    };

    // Funtion to delete a Task the Parameter will also be the id 
    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo) => todo.id !== id)); // It should only return all other Todos with a different id
    }

    // Funtion to Edit a specific Task (Todo) which takes two Parameters (Event, ID)
    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();

        // Maps through every Todo and check if its the same Id than activated the Todo State (it can be edited)
        setTodos(todos.map((todo) => (
            todo.id === id ?{...todo, todo:editTodo}:todo
        )));

        setEdit(false);
    }


    const inputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

  return (
    <form className='todos_single' onSubmit={(e) => handleEdit(e, todo.id)}>

    {/* If the Edit Mode is pm than show the Input Field to Edit it */}
    {/* Else if the todo is Done than show it crossed out */}
    {/* Else show us the normal Todo Text */}
        {
            edit ? (
                <input 
                ref={inputRef}
                value={editTodo} 
                onChange={(e) => setEditTodo(e.target.value)}  
                className="todos_single-text"></input>
            ) :  todo.isDone ? (
                    <s className='todos_single-text'>{todo.todo}</s>
            ) : (
                    <span className='todos_single-text'>{todo.todo}</span>
                
            )}


       
        <div>
            {/* Only change the State of Edit when the EditMode is off and the Todo is not Done */}
            <span className='icon'  onClick={() => {
                if(!edit && !todo.isDone){
                    setEdit(!edit);
                }}}><AiFillEdit/></span>
            <span className='icon' onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
            <span className='icon' onClick={() => handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo
