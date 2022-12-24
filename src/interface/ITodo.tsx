export interface ITodo {
  id: string;
  label: string;
  isComplete: boolean;
}

export type TodoProps = {
  addTodo: (todo: Pick<ITodo, "label">) => void;
  focusedTodo?: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  randomFocusedTodo: () => void;
  updateTodoCompletion: (todoId: string, isComplete: boolean) => void;
};
