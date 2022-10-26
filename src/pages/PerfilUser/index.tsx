import EstruturaCommit from "../../components/EstruturaCommit"
import NavBar from "../../components/NavBar"
import DadosPerfil from "../../components/PerfilDados"
import './perfil.css'

export default function Perfil(){
    return (
        <div>
            <NavBar/>
            <DadosPerfil/>
            <EstruturaCommit/>
        </div>
    )
}