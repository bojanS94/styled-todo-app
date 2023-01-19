import React, { ChangeEvent, FormEventHandler, useState } from "react";
import Checkbox from "../components/Checkbox";
import useTodoStore from "../hooks/use-todo-store";
import { ITodo } from "../interface/ITodo";

type Props = {};

const TodoListScreen: React.FC<Props> = () => {
  const { addTodo, todos, setTodos, updateTodoCompletion } = useTodoStore();

  const [newTodoLabel, setNewTodoLabel] = useState("");

  const handleTodoLabel = (event: ChangeEvent<HTMLInputElement>) =>
    setNewTodoLabel(event.target.value);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    addTodo({ label: newTodoLabel });
    setNewTodoLabel("");
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
            <label>
              <Checkbox
                checked={todo.isComplete}
                onChange={() => {
                  updateTodoCompletion(todo.id, !todo.isComplete);
                }}
              />
              {todo.label}
            </label>
            <button onClick={() => handleDeleteTodo(todo)}>Delete Todo</button>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Enter a todo item"
          value={newTodoLabel}
          onChange={handleTodoLabel}
        />
        <button type="button" onClick={handleClearTodoClick}>
          Clear complete todos
        </button>
      </form>
    </div>
  );
};

export default TodoListScreen;
