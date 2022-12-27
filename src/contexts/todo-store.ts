import { createContext } from "react";
import { ITodo } from "../interface/ITodo";

const TodoContext = createContext<[ITodo[], React.Dispatch<React.SetStateAction<ITodo[]>>]>([[], () => { }]);

export default TodoContext;