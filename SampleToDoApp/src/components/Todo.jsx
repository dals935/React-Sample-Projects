import Form from "./Form";
import { useState } from "react";
import TodoList from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedArrays = todos.filter((todo) => todo.done).length
  const totalTodos = todos.length
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedArrays={completedArrays} totalTodos={totalTodos}/>
    </div>
  );
}
