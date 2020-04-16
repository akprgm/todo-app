import React, { ChangeEvent } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodoAction, toggleTodoAction, deleteTodoAction } from '../actions/TodoActions';
import { Input, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppSate) => state.todoState.todos );
  const dispatch = useDispatch();

  const handleUpdateTodo = (e: ChangeEvent<HTMLInputElement> ) => {
    dispatch(updateTodoAction(e.target.value, e.target.id));
  }
  const handleToggleTodo = (todo: Todo) => {
    dispatch(toggleTodoAction(todo.id));
  }
  const handleDeleteTodo = (todo: Todo) => {
    dispatch(deleteTodoAction(todo.id));
  }

  return (
    <ul className="todo-item">
      {todos.map((todo: Todo)=> (
        <li key={todo.id}>
          <Checkbox  color="primary" checked={todo.complete} onChange={() => handleToggleTodo(todo) }/>
          <Input type="text" id={todo.id} className={todo.complete? 'complete todo-item-input' :  'todo-item-input' } 
            disabled={todo.complete? true :  undefined } 
            defaultValue={todo.text} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateTodo(e)}
            />
          <DeleteIcon color="secondary" onClick={() => handleDeleteTodo(todo)}/>
        </li>)    
      )}
    </ul>
   )
}
export default TodoList;
