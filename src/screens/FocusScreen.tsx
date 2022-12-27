import React from "react";
import useTodoStore from "../hooks/use-todo-store";

type Props = {};

const FocusScreen: React.FC<Props> = () => {
  const {
    focusedTodo: todo,
    updateTodoCompletion,
    randomFocusedTodo,
  } = useTodoStore();

  const handleMarkCompleted = () => {
    if (todo) updateTodoCompletion(todo.id, true);
  };

  return todo ? (
    <div>
      <div>{todo.label}</div>
      <button onClick={handleMarkCompleted}>Mark completed</button>
      <button onClick={randomFocusedTodo}>Ignore this todo.</button>
    </div>
  ) : (
    <div>No active todos!</div>
  );
};

export default FocusScreen;
