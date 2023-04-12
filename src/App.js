import Header from "./Components/Header";
import Form from "./Components/Form";
import { useState } from "react";
import ToDoList from "./Components/ToDoList";
function App() 
{
  const[todo, setTodo]=useState("")//Creating state for a single to do item
  const[todoList, setTodoList]=useState([])

  return (
    <div className="App">
      <Header/>
      {/* Passing the states and methods as props to the form component */}
      <Form 
        todo={todo} 
        setTodo={setTodo} 
        todoList={todoList} 
        setTodoList={setTodoList}/>
        <ToDoList todoList={todoList}/>
    </div>
  );
}

export default App;
