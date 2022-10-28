import { BackgroundCover,Cardinput } from "../Cadastro/style"
import { InputNv } from "../../components/Input"
import { BotaoNv } from "../../components/Botao"
import { Link } from "react-router-dom"
export function CadastroNv(){
    return (
        <>
           <BackgroundCover>
            <Cardinput>
            <img src="src\img\logo.png" alt="" />
            <h1>Login</h1>
            <InputNv type='text'/>
            <InputNv type='text'/>
            <InputNv type='password'/>
            <InputNv type='password'/>
            <InputNv type=''/>
            <InputNv/>
            <BotaoNv/>
            <Link to='/Login'>Voltar ao login</Link>
            </Cardinput>
        </BackgroundCover>
        </>
    )
}