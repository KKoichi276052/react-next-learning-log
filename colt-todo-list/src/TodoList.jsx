import List from "@mui/material/List";
import { useState } from "react";
import TodoItem from "./TodoItem";

const initialTodos = [
  { id: 1, title: "walking", completed: false },
  { id: 2, title: "walking", completed: false },
  { id: 3, title: "walking", completed: true },
  { id: 4, title: "walking", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id) => {
    return prevTodos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      else return todo;
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={() => removeTodo(todo.id)}
            toggle={() => toggleTodo(todo.id)}
          />
        );
      })}
    </List>
  );
}
