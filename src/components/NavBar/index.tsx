import {NavBar} from "./style"
import { Link } from "react-router-dom"

export default function NavNv(){
   return(
        <NavBar>
          <Link to='/feed'><img src="src\img\logo Nav.png" alt="" /></Link>
          <div>
          <h3>Olá, Nome</h3>
          <Link to='/login'>Sair</Link>
          </div>
       </NavBar>
   )
}