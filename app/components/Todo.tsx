"use client";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";


import { useEffect, useState } from "react";
import useTodoStore from "../store/useTodoStore";
import Button from "./Button";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash } from "react-icons/fa";

const Todos = () => {
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingTodo, setDeletingTodo] = useState<any>();
  const [deleting, setDeleting] = useState(false);

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
  const getTimeAgo = (timestamp: number): string => {
    const now = Date.now();
    const secondsAgo = Math.floor((now - timestamp) / 1000);
    if (secondsAgo < 10) {
      return `Just Now`;
    } else if (secondsAgo < 60) {
      return `${secondsAgo} seconds ago`;
    } else if (secondsAgo < 3600) {
      const minutesAgo = Math.floor(secondsAgo / 60);
      return `${minutesAgo} minutes ago`;
    } else if (secondsAgo < 86400) {
      const hoursAgo = Math.floor(secondsAgo / 3600);
      return `${hoursAgo} hours ago`;
    } else {
      const daysAgo = Math.floor(secondsAgo / 86400);
      return `${daysAgo} days ago`;
    }
  };

  const handleDeleteButton = () => {
    try {
      setDeleting(true);
      deleteTodo(deletingTodo);

      setDeletingTodo("");
    } catch (error) {
      setIsModalOpen(false);
    } finally {
      setDeleting(false);
    }
  };
  useEffect(() => {
    if (deleting === false && DeleteLoading === false) {
      setIsModalOpen(false);
    }
  }, [DeleteLoading]);

  return (
    <div>
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
            {DeleteLoading ? (
              <div className="flex items-center justify-center w-full ">
                <p className="loader"></p>
              </div>
            ) : (
              <p>Delete</p>
            )}
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
            className={`my-4 flex justify-between items-center p-2 border rounded-lg `}
          >
            <div className="mr-2">
              {todo.completed?
              <MdCheckBox className="w-8 h-8" />
              :


            <MdCheckBoxOutlineBlank className="w-8 h-8"/>
              }

            </div>
            <span
              className={`cursor-pointer flex-1 ${
                todo.completed ? "text-gray-500" : ""
              }`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.title}
            </span>
              <div className="text-sm text-slate-400">{getTimeAgo(todo.creationDate)}</div>
            <button
              className="px-2 py-1 text-red-500"
              onClick={() => handleDeleteTodo(todo.id)}
              disabled={DeleteLoading} // Disable delete button when loading
            >
              <FaTrash className="w-8 h-8" />
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Todos;
