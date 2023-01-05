import React, { ChangeEvent, useState } from "react";
import Checkbox from "../components/Checkbox";
import useTodoStore from "../hooks/use-todo-store";
import { ITodo } from "../interface/ITodo";

type Props = {};

const TodoListScreen: React.FC<Props> = () => {
  const { addTodo, todos, setTodos, updateTodoCompletion } = useTodoStore();

  const [newTodoLabel, setNewTodoLabel] = useState("");

  const handleTodoLabel = (event: ChangeEvent<HTMLInputElement>) =>
    setNewTodoLabel(event.target.value);

  const handleNewTodoKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTodoLabel !== "") {
      addTodo({ label: newTodoLabel });
      setNewTodoLabel("");
    }
  };

  const handleTodoIsComplete =
    (todo: ITodo) => (event: ChangeEvent<HTMLInputElement>) => {
      updateTodoCompletion(todo.id, event.target.checked);
    };

  const handleClearTodoClick = () =>
    setTodos((todos) => todos.filter((todo) => !todo.isComplete));

  const handleDeleteTodo = (handleTodo: ITodo) => () =>
    setTodos((todos) => todos.filter((todo) => todo.id !== handleTodo.id));

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <Checkbox
              checked={todo.isComplete}
              onChange={handleTodoIsComplete(todo)}
            />
            {todo.label}
            <button onClick={handleDeleteTodo(todo)}>Delete Todo</button>
          </div>
        ))}
      </div>
      <input
        placeholder="Enter a todo item"
        value={newTodoLabel}
        onChange={handleTodoLabel}
        onKeyDown={handleNewTodoKeyPress}
      />
      <button onClick={handleClearTodoClick}>Clear complete todos</button>
    </div>
  );
};

export default TodoListScreen;
