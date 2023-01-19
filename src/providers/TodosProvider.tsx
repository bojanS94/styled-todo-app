import {
  createContext,
  FC,
  ReactNode,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

import { ITodo } from "../interface/ITodo";
import useLocalStorage from "../hooks/use-local-storage";

interface TodoContextType {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => undefined,
});

const TodosProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>("todos", []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);

export default TodosProvider;
