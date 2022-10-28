import { CardDados } from "./style"

export default function CardPerfil(){
    return(
        
        <>
        <CardDados>
        <img src="src\img\foto.png" alt="" />  
        <div className="subCard">
        <div>
         <h4>Nome Sobrenome</h4>
         <p>ap 85</p>
         <p>user@mail.com</p>
         </div>
         <div>
         <button>publicar</button>
        </div>
        </div>
        </CardDados>
        </>
    )
}