import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from '../typings';

// React.FC        is the Functional Compoment of an Function in React
// React.ReactNode is every React component
// -> Both are not necessary to use

const App: React.FC = () => {

  // Defining a String as a Type Definiton in React Hook 
  // In the Brackets there can be any Type Definiton (Read txt File)
  const [todo, setTodo] = useState<string>("");
  // This is an Array of an Interface defined in a Seperate File usind inside an React Hook Component
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault(); // To prevent reloading the Site when Button is clicked
    
    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className='heading'>
        Taskify
      </span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
