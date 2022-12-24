import React from "react";
import { TodoProps } from "../interface/ITodo";

type Props = TodoProps & {};

const FocusScreen: React.FC<Props> = ({ todos, updateTodoCompletion }) => {
  const todo = todos.filter((todo) => !todo.isComplete)[0];

  const handleMarkCompleted = () => {
    updateTodoCompletion(todo.id, true);
  };

  return todo ? (
    <div>
      <div>{todo.label}</div>
      <button onClick={handleMarkCompleted}>Mark completed</button>
    </div>
  ) : (
    <div>No active todos!</div>
  );
};

export default FocusScreen;
