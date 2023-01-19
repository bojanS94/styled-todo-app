import { shuffle } from "lodash";
import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";

import { ITodo } from "../interface/ITodo";
import { useTodos } from "../providers/TodosProvider";

const useTodoStore = () => {
  const { todos, setTodos } = useTodos();

  const getIncompleteTodo = () =>
    todos.filter((todo) => !todo.isComplete)[0]?.id;

  const [focusedTodoId, setFocusedTodoId] = useState<string | undefined>(
    getIncompleteTodo()
  );

  const addTodo = (todo: Pick<ITodo, "label">) => {
    const id = nanoid();
    setTodos([...todos, { id, label: todo.label, isComplete: false }]);
    if (!focusedTodo) setFocusedTodoId(id);
  };

  const updateTodoCompletion = (todoId: string, isComplete: boolean) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) return { ...todo, isComplete };
        return todo;
      })
    );
  };

  const focusedTodo = todos.find((todo) => todo.id === focusedTodoId);

  useEffect(() => {
    if (focusedTodo?.isComplete) setFocusedTodoId(getIncompleteTodo());
  }, [todos, focusedTodo]);

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
};

export default useTodoStore;
