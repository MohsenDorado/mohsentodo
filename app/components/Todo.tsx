"use client"

import { useState } from "react";
import useTodoStore from "../store/useTodoStore";
import Button from "./Button";

const Todos = () => {

    const [newTodo, setNewTodo] = useState('');
    const { todos, loading, addTodo, toggleTodo, deleteTodo } = useTodoStore(
      (state) => ({
        todos: state.todos,
        loading: state.loading,
        addTodo: state.addTodo,
        toggleTodo: state.toggleTodo,
        deleteTodo: state.deleteTodo,
      })
    );
    const handleAddTodo = (e:any) => {
      e.preventDefault();
      
      if (newTodo.trim() === '') return;
      addTodo(newTodo);
      setNewTodo('');
    };
  
  
    return ( 
        <div>
          <form onSubmit={(e)=>handleAddTodo(e)} >


          <input type="text" className="" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="What is Todo?" />
          <Button varient="Confirm" text="Add" />
          </form>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center p-2 border rounded ${
                todo.completed ? 'line-through' : ''
              }`}
            >
              <span
                className={`cursor-pointer flex-1 ${
                  todo.completed ? 'text-gray-500' : ''
                }`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.title}
              </span>
              <button
                className="px-2 py-1 text-red-500"
                onClick={() => deleteTodo(todo.id)}
                disabled={loading}  // Disable delete button when loading
              >
                Delete
              </button>
            </li>
          ))}
        </div>
     );
}
 
export default Todos;