import React from "react";
import { TodoProps } from "../interface/ITodo";

type Props = TodoProps & {};

const FocusScreen: React.FC<Props> = ({ todos }) => {
  const todo = todos[0];
  return todo ? <div>{todo.label}</div> : <div>No active todos!</div>;
};

export default FocusScreen;
