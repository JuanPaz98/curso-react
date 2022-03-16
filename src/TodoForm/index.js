
import React from "react"
import {TodoContext} from "../TodoContext/index"
import {useState} from "react"
import "./TodoForm.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = useState("")

    const {
        addTodos, 
        setOpenModal
    }= React.useContext(TodoContext)

    const onCancel = () =>{
        setOpenModal(false)
    }
    const onChange = (e) =>{
        setNewTodoValue(e.target.value) 
    }
    const onCreate = () =>{
       
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        addTodos(newTodoValue)
        setOpenModal(false)
    }
    return(
        <form className="form-container" onSubmit={onSubmit}>
            <label>Nuevo ToDo</label>
            <textarea className="textarea-form"
            value={newTodoValue}
            onChange={onChange}
            placeholder="escribe tu nuevo ToDo"
            />  
            <div className="buttons">
                <button className="btn-cancelar"
                type="button"
                onClick={onCancel}>Cancelar</button>
                <button className="btn-crear"
                type="submit"
                onClick={onCreate}>Crear</button>
            </div>
        </form>
    )
}

export default TodoForm