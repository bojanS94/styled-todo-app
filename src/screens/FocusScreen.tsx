import React from "react";
import { TodoProps } from "../interface/ITodo";

type Props = TodoProps & {};

const FocusScreen: React.FC<Props> = ({
  focusedTodo: todo,
  updateTodoCompletion,
}) => {
  const handleMarkCompleted = () => {
    if (todo) updateTodoCompletion(todo.id, true);
  };

  return todo ? (
    <div>
      <div>{todo.label}</div>
      <button onClick={handleMarkCompleted}>Mark completed</button>
      <button>Ignore this todo.</button>
    </div>
  ) : (
    <div>No active todos!</div>
  );
};

export default FocusScreen;
