export interface ITodo {
  id: string;
  label: string;
  isComplete: boolean;
}

export type TodoProps = {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
};
