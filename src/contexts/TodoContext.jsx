import { createContext, useContext, useState } from "react";
import {
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  collection,
  doc,
} from "firebase/firestore";
import { db } from "../utils/InitFirebase";
import { useAuthContext } from "./AuthContext";

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  //
  const { currentUser } = useAuthContext();
  const [todos, setTodos] = useState([]);

  const todo = {
    insert: (data) => setTodos((current) => [data, ...current]),
    set: (data) => {
      setTodos(data);
    },
    update: (id, data) => {},
    delete: (id) =>
      setTodos((current) => {
        return current.filter((item) => item.id != id);
      }),
  };

  // Create
  const createDocTodo = async (data) => {
    try {
      const todoCollection = collection(db, `users/${currentUser.uid}/todos`);
      data.date = new Date();
      data.completed = false;
      const docRef = await addDoc(todoCollection, data);
      data.id = docRef.id;
      todo.insert(data);
      return docRef.id;
    } catch (error) {
      console.log(error.message);
    }
  };

  // Read
  const readDocsTodo = async () => {
    try {
      const todoCollection = collection(db, `users/${currentUser.uid}/todos`);
      const query = await getDocs(todoCollection);
      const result = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      todo.set(result);
      return true;
    } catch (error) {
      console.log(error.message);
    }
  };

  // Update
  // Delete
  const deleteDocTodo = async (id) => {
    try {
      const todoDoc = doc(db, `users/${currentUser.uid}/todos`, id);
      const del = await deleteDoc(todoDoc);
      todo.delete(id);
      return true;
    } catch (error) {
      console.log(error.message);
    }
  };
  //
  const value = { todos, createDocTodo, readDocsTodo, deleteDocTodo };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
