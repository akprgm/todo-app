import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../actions/TodoActions';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextField } from '@material-ui/core';

const TodoInput: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }
  const handleAddTodo = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTodo.trim() === '') return
    dispatch(addTodoAction({
      id: uuidv4(),
      text: newTodo,
      complete: false
    }));
    setNewTodo("");
  }

  return (
    <form>
      <label>
        <TextField className="add-todo-input" variant="outlined" value={newTodo} size="small" onChange={handleTodoChange} />
        <Button type="submit" variant="contained" color="primary" onClick={handleAddTodo}>Add Todo</Button>
      </label>
    </form>
  )
};  

export default TodoInput;
