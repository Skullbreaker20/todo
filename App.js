import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
    >
      <span className="todo-text">{index+1+")."}</span><span className="todo-text" style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <button className="line" onClick={() => markTodo(index)}>✓</button>{' '}
        <button className="clear" onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  );
}
function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h1><b>Add Todo</b></h1>
      <input type="textarea" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      <div><button type="submit" className="s-btn">Submit</button></div>
    </Form>
  );
}

const App =()=>{
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    const newTodos = [...todos,{ text }];
    setTodos(newTodos);
  };
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return(
    <div className="flex-container">
      <span id="left-box">
        <div className="todo-insert">
          <FormTodo addTodo={addTodo} />
        </div>
      </span>
      <span id="right-box">
        <div>
          {todos.map((todo, index) => (
                <div className="todo-body"><Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
                </div>
           ))}
        </div>
      
      </span>
    </div>
  )
}
export default App