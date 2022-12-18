import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { ITodo } from "../interface/ITodo";
import { nanoid } from "nanoid";

type Props = {};

const ListScreen: React.FC<Props> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [newTodoLabel, setNewTodoLabel] = useState("");

  const handleTodoLabel = (event: ChangeEvent<HTMLInputElement>) =>
    setNewTodoLabel(event.target.value);

  const handleNewTodoLabelChange = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && newTodoLabel !== "") {
      setTodos((todos) => [
        ...todos,
        { id: nanoid(), label: newTodoLabel, isComplete: false },
      ]);
      setNewTodoLabel("");
    }
  };

  const handleTodoIsComplete =
    (handleTodo: ITodo) => (event: ChangeEvent<HTMLInputElement>) => {
      setTodos((todos) =>
        todos.map((todo) => {
          if (todo.id === handleTodo.id)
            return { ...todos, isComplete: event.target.checked };
          return todo;
        })
      );
    };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={handleTodoIsComplete(todo)}
            />
            {todo.label}
          </div>
        ))}
      </ul>
      <input
        value={newTodoLabel}
        onChange={handleTodoLabel}
        onKeyDown={handleNewTodoLabelChange}
      />
    </div>
  );
};

export default ListScreen;
