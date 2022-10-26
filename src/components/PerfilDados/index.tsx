import {  Img, NovoCommit, NomePg, DatePg, CommitPg, PerfilEdit } from "./estilo";


export default function DadosPerfil(){
    return(
        
        <div>
            <NovoCommit className="border border-top-0">
            <Img src="src\img\foto.png" alt="" />
            <div>
                <NomePg>Nome Sobrenome</NomePg>
                <CommitPg>AP - null</CommitPg>
                <CommitPg>User@email.com</CommitPg>
                <CommitPg>00 Publicações</CommitPg>
                <PerfilEdit className="position-absolute top-0 end-0 ">editar perfil</PerfilEdit>
            </div>
            </NovoCommit>
        </div>
        
    )
}