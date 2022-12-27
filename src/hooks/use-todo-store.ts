import { shuffle } from "lodash";
import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import TodoContext from "../contexts/todo-store";
import { ITodo } from "../interface/ITodo";

const useTodoStore = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const getIncompleteTodo = () => todos.filter((todo) => !todo.isComplete)[0]?.id


  const [focusedTodoId, setFocusedTodoId] = useState<string | undefined>(
    getIncompleteTodo()
  );

  const addTodo = (todo: Pick<ITodo, "label">) => {
    const id = nanoid();
    setTodos((todos) => [
      ...todos,
      { id, label: todo.label, isComplete: false },
    ]);
    if (!focusedTodo) setFocusedTodoId(id);
  };

  const updateTodoCompletion = (todoId: string, isComplete: boolean) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === todoId) return { ...todo, isComplete };
        return todo;
      })
    );
  };

  const focusedTodo = todos.find((todo) => todo.id === focusedTodoId);

  useEffect(() => {
    if (focusedTodo?.isComplete) setFocusedTodoId(getIncompleteTodo());
  }, [todos, focusedTodo])

  const randomFocusedTodo = () => {
    setFocusedTodoId(
      shuffle(todos.filter((todo) => !todo.isComplete))[0]?.id ?? null
    );
  };

  const todoApi = {
    addTodo,
    focusedTodo,
    todos,
    setTodos,
    randomFocusedTodo,
    updateTodoCompletion,
  };

  return todoApi;
}

export default useTodoStore;