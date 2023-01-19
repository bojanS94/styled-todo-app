import { createContext } from "react";
import { ITodo } from "../interface/ITodo";

interface TodoContextType {
  todos: ITodo[];
  setTodos: (value: ITodo[]) => void;
}

const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => undefined,
});

export default TodoContext;
