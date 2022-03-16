import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const change = (event) => {setSearchValue(event.target.value)
    console.log(event.target.value)};

    return(
        <input onChange={change} className="TodoSearch" placeholder="Busca tu tarea"  value={searchValue}/>
    );
}

export default TodoSearch; 