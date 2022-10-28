import { BackgroundCover, Cardinput } from "./style"
import { InputNv } from "../../components/Input"
import { BotaoNv } from "../../components/Botao"
import { Link } from "react-router-dom"
import Back from "../../img/cover.png"




export function LoginNv(){
    return (
        <BackgroundCover style={{background:`url(${Back})`, backgroundSize:'cover', height:'100vh'}}>
            <Cardinput>
            <img src="src\img\logo.png" alt="" />
            <h1>Login</h1>
            <InputNv
            type='text'
            placeholder='email'
            />
            <InputNv
            type='password'
            placeholder='senha'
            />
            <Link to='/perfil'><BotaoNv/></Link>
            <Link to='/cadastro'>cadastre-se</Link>
            </Cardinput>
        </BackgroundCover>
    )
}