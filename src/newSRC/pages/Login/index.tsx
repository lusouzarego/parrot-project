import { BackgroundCover, Cardinput } from "./style"
import { InputNv } from "../../components/Input"
import { BotaoNv } from "../../components/Botao"
import { Link } from "react-router-dom"





export function LoginNv(){
    return (
        <BackgroundCover>
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
            <BotaoNv/>
            <Link to='/cadastro'>cadastre-se</Link>
            </Cardinput>
        </BackgroundCover>
    )
}