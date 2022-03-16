import React from 'react';
import useLocalStorage from "./useLocalStorage"
import {useState} from "react"

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error,
      }= useLocalStorage("TODOS_V1", [])
    
      const [searchValue, setSearchValue] = useState("");
      const [openModal, setOpenModal] = useState(false)
      const completedTodos = todos.filter(todo => todo.completed).length;
      const totalTodos = todos.length;
    
      let searchTodos = [];
      if(!searchValue.length >= 1){
        searchTodos = todos
      }
      else{
        searchTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        let newTodos = [...todos]
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
      const addTodos = (text) => {
        let newTodos = [...todos]
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      }
      const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        let newTodos = [...todos]
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue, 
            setSearchValue, 
            searchTodos,
            completeTodos,
            addTodos,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };