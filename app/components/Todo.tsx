"use client"

import { useState } from "react";
import useTodoStore from "../store/useTodoStore";
import Button from "./Button";

const Todos = () => {

    const [newTodo, setNewTodo] = useState('');
    const {DeleteLoading, todos, loading, addTodo, toggleTodo, deleteTodo } = useTodoStore(
      (state) => ({
        todos: state.todos,
        DeleteLoading:state.DeleteLoading,
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
         
          <form
          className="flex items-center justify-center flex-row gap-5 w-full mb-10"
          onSubmit={(e)=>handleAddTodo(e)} >


          <input
            className="h-full border border-black py-2 px-3 rounded-md w-[75%]"
           type="text"
          
           value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="What is Todo?" />
           <div className="w-[25%]">

          <Button disabled={newTodo.trim()===''} varient="Confirm" text={loading?
            (

              <div className="flex items-center justify-center w-full ">
                <p className="loader"></p>

            
          </div>
          )
             : (<p>Add</p>)} />
           </div>
          
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
                disabled={DeleteLoading}  // Disable delete button when loading
              >
                {todo.deleting?"Loading":"Delete"}
                
              </button>
            </li>
          ))}
        </div>
     );
}
 
export default Todos;