import react from "react";
import "./CreateButton.css"
import agregar from "../img/agregar.png"

function CreateTodoButtom(props){
    const onClickButton = () =>{
        props.setOpenModal(prevState => !prevState)
    }
    return(
        <>
            <button className="button" onClick ={onClickButton}><img src={agregar}/></button>
        </>
    );
}

export default CreateTodoButtom;
