import React, { ChangeEvent, useState } from "react";
import useTodoStore from "../hooks/use-todo-store";
import { ITodo } from "../interface/ITodo";

type Props = {};

const ListScreen: React.FC<Props> = () => {
  const { addTodo, todos, setTodos, updateTodoCompletion } = useTodoStore();

  const [newTodoLabel, setNewTodoLabel] = useState("");

  const handleTodoLabel = (event: ChangeEvent<HTMLInputElement>) =>
    setNewTodoLabel(event.target.value);

  const handleNewTodoLabelChange = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && newTodoLabel !== "") {
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
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={handleTodoIsComplete(todo)}
            />
            {todo.label}
            <button onClick={handleDeleteTodo(todo)}>Delete Todo</button>
          </div>
        ))}
      </div>
      <input
        value={newTodoLabel}
        onChange={handleTodoLabel}
        onKeyDown={handleNewTodoLabelChange}
      />
      <button onClick={handleClearTodoClick}>Clear complete todos</button>
    </div>
  );
};

export default ListScreen;
