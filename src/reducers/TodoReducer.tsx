import { v4 as uuidv4 } from 'uuid';
import * as Types from '../actions/types';

export const initialState: TodoState = {
  todos: [{
    id: uuidv4(),
    text: 'Learn TypeScript',
    complete: true
  }, {
    id: uuidv4(),
    text: 'Create Sample Application',
    complete: false
  }]
}

export default (state = initialState, action: any) => {
  switch(action.type) {
    case Types.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case Types.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => 
          todo.id === action.payload.todoId ? {...todo, text: action.payload.text } : todo
        )
      }
    case Types.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? {...todo, complete: !todo.complete } : todo
        )
      }
    case Types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => 
          todo.id !== action.payload
        )
      }
    default:
      return state
  }
}
