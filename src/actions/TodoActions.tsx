import * as Types from './types';

export const addTodoAction = (todo: Todo) => ({
  type: Types.ADD_TODO,
  payload: todo
});

export const updateTodoAction = (text: string, todoId: string) => ({
  type: Types.UPDATE_TODO,
  payload: {
    text,
    todoId
  }
});

export const toggleTodoAction = (todoId: string) => ({
  type: Types.TOGGLE_TODO,
  payload: todoId
});

export const deleteTodoAction = (todoId: string) => ({
  type: Types.DELETE_TODO,
  payload: todoId
});
