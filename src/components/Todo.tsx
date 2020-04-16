import React from 'react';
import AddTodoForm from './TodoInput';
import TodoListItem from './TodoList';
import './style.css'

const Todo: React.FC = () => {
  return ( 
    <div className="todo">
      <AddTodoForm></AddTodoForm>
      <TodoListItem></TodoListItem>
    </div>
   );
}

export default Todo;
