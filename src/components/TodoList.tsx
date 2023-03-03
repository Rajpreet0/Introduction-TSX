import React from 'react'
import { Todo } from '../../typings'
import SingleTodo from './SingleTodo';
import "./style.css"

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className='todos'>
        {/* Mapping through all the Todos which will be Displayed as a SingleTodo  */}
      {todos.map(todo => (
        <>
            <SingleTodo 
            todo={todo} 
            key={todo.id} 
            todos={todos}
            setTodos={setTodos}/>
        </>
      ))}
    </div>
  )
}

export default TodoList
