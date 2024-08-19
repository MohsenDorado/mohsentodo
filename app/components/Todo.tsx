"use client";

import { useEffect, useState } from "react";
import useTodoStore from "../store/useTodoStore";
import Button from "./Button";
import Modal from "./Modal";
import { motion, AnimatePresence } from 'framer-motion';


const Todos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingTodo, setDeletingTodo] = useState<any>();
  const [deleting, setDeleting] = useState(false)

  const [newTodo, setNewTodo] = useState("");
  const { DeleteLoading, todos, loading, addTodo, toggleTodo, deleteTodo } =
    useTodoStore((state) => ({
      todos: state.todos,
      DeleteLoading: state.DeleteLoading,
      loading: state.loading,
      addTodo: state.addTodo,
      toggleTodo: state.toggleTodo,
      deleteTodo: state.deleteTodo,
    }));
  const handleAddTodo = (e: any) => {
    e.preventDefault();

    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };
  const handleDeleteTodo = (id: any) => {
    setIsModalOpen(true);
    setDeletingTodo(id);
  };

  const handleDeleteButton = () => {
    try {
      setDeleting(true)
      deleteTodo(deletingTodo);

      setDeletingTodo("");
     
    } catch (error) {
      setIsModalOpen(false);
    }  finally{
      setDeleting(false)
    
    }
      
    
  };
  useEffect(() => {
    if (deleting===false&&DeleteLoading===false) {
      setIsModalOpen(false)
      
    }
    
    
    
    
    
    
  }, [DeleteLoading])
  

  return (
    <div>
      <button
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-700"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        deletingTodo={deletingTodo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h1 className="p-2 font-bold">Sure to delete Todo?</h1>
        <div className="flex items-center justify-center w-full gap-5 mt-1 px-3">
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="font-semibold p-1 text-md rounded-md border-none text-white bg-green-400 w-[100px] h-[50px]"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteButton}
            className="font-semibold p-1 text-md rounded-md border-none text-white bg-red-400 w-[100px] h-[50px]"
          >
            {
              DeleteLoading ? (
                <div className="flex items-center justify-center w-full ">
                  <p className="loader"></p>
                </div>
              ) : (
                <p>Delete</p>
              )
            }
          </button>
        </div>
      </Modal>

      <form
        className="flex items-center justify-center flex-row gap-5 w-full mb-10 lrg:px-[200px]"
        onSubmit={(e) => handleAddTodo(e)}
      >
        <input
          disabled={loading}
          className="h-full border border-black py-2 px-3 rounded-md w-[75%] placeholder:select-none"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What is Todo?"
        />
        <div className="w-[25%]">
          <Button
            disabled={newTodo.trim() === ""}
            varient="Confirm"
            text={
              loading ? (
                <div className="flex items-center justify-center w-full ">
                  <p className="loader"></p>
                </div>
              ) : (
                <p>Add</p>
              )
            }
          />
        </div>
      </form>
      <AnimatePresence>

      {todos.map((todo) => (
        <motion.li
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.3 }}
        transition={{ duration: 0.5 }}
          key={todo.id}
          className={`flex justify-between items-center p-2 border rounded ${
            todo.completed ? "line-through" : ""
          }`}
        >
          <span
            className={`cursor-pointer flex-1 ${
              todo.completed ? "text-gray-500" : ""
            }`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.title}
          </span>
          <button
            className="px-2 py-1 text-red-500"
            onClick={() => handleDeleteTodo(todo.id)}
            disabled={DeleteLoading} // Disable delete button when loading
          >
            Delete
          </button>
        </motion.li>
      ))}
            </AnimatePresence>

    </div>
  );
};

export default Todos;
