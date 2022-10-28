import { BackgroundCover,Cardinput } from "../Cadastro/style"
import { InputNv } from "../../components/Input"
import { BotaoNv } from "../../components/Botao"
import { Link } from "react-router-dom"
import Back from "../../img/cover.png" 
export function CadastroNv(){
    return (
        <>
           <BackgroundCover style={{background:`url(${Back})`, backgroundSize:'cover', height:'100vh'}}>
            <Cardinput>
            <img src="src\img\logo.png" alt="" />
            <h1>Cadastro</h1>
            <InputNv type='text' placeholder='nome'/>
            <InputNv type='text' placeholder='email'/>
            <InputNv type='password' placeholder='senha'/>
            <InputNv type='password' placeholder='confirmar senha' />
            <InputNv type='text' placeholder='apartamento'/>
            <InputNv type='text' placeholder='link foto'/>
            <BotaoNv/>
            <Link to='/Login'>Voltar ao login</Link>
            </Cardinput>
        </BackgroundCover>
        </>
    )
}