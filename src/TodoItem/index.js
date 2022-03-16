import react from "react";
import cerrar from "../img/cerrar.png";
import correcto from "../img/correcto.png";
import "./TodoItem.css"


function TodoItem(props){

    return(
        <li className="items">
            <span onClick={props.onComplete}><img src={correcto}/></span>
            <p className={`todoItem-p ${props.completed && "todoItem-p--completed"}`}>{props.text}</p>
            <span onClick={props.onDelete}><img src={cerrar}/></span>
        </li>
    );
}

export default TodoItem;