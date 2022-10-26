import { Form } from "react-router-dom";
import './feedinput.css'

export default function FeedInput(){
    return(
        <form className=" formInput">
           <div  className="bloco position-relative border border-top-0">
            <img className="imgperfil" src="src\img\foto.png" alt=""/>
            <input className="inputComentario" type="text"/>
            <button className="btnPublicar position-absolute bottom-0 end-0 ">publicar</button>
            </div> 
        </form>
        
    )
}