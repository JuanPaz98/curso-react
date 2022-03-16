
import React from "react";
import {TodoContext} from "../TodoContext"
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import CreateTodoButton from "../CreateTodoButton";
import Modal from "../Modal/index";
import TodoForm from "../TodoForm"

function AppUI(){
    const {
      error,
      loading,
      searchTodos,
      completeTodos,
      deleteTodos, 
      openModal ,
      setOpenModal
    } = React.useContext(TodoContext)
    return(
      <>
        <TodoCounter/>
        <TodoSearch />
        <TodoList>
          {error && <p>Tuvimos un error, paila...</p>}
          {loading && <p>Estamos cargando, relajate...</p>}
          {(!loading && !searchTodos.length) && <h2>Crea tu primera tarea...</h2>}

          {searchTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodos(todo.text)} onDelete={() => deleteTodos(todo.text)} />))}
        </TodoList>
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
        <CreateTodoButton 
        setOpenModal = {setOpenModal}
        />
      </>
    )
}

export default AppUI;