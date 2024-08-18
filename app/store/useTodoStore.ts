import { todo } from 'node:test';
import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  deleting:boolean;
}

interface TodoStore {
  todos: Todo[];
  loading: boolean;
  DeleteLoading:boolean;
  setLoading: (loading: boolean) => void;
  setDeleteLoading:(DeleteLoading:boolean)=>void
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

 const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      loading: false,
      DeleteLoading:false,
      setDeleteLoading:(DeleteLoading)=>set({DeleteLoading}),
      setLoading: (loading) => set({ loading }),
      addTodo: (title) => {
        set({ loading: true });
        setTimeout(() => {  // Simulate a delay for loading state
          set((state) => ({
            todos: [
              ...state.todos,
              { id: Date.now(), title, completed: false,deleting:false },
            ],
            loading: false,
          }));
        }, 1000);  // Delay for 1 second
      },
      toggleTodo: (id) => {
        set({ loading: true });
        setTimeout(() => {
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
            loading: false,
          }));
        }, 500);  // Simulate a short delay
      },
      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, deleting:!todo.deleting } : todo
          ),
          loading: false,
        }));
        setTimeout(() => {
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
            DeleteLoading: false,
          }));
        }, 500);
        
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, deleting:!todo.deleting } : todo
          ),
          loading: false,
        }));
        // Simulate a short delay
      },
    }),
    {
      name: 'todo-storage', // Key for localStorage
    }
  )
);
export default useTodoStore