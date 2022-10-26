import React from "react";
import {  Img, NovoCommit, NomePg, DatePg, CommitPg } from "./index.estilo";


export default function EstruturaCommit(){
    return(
        
        <div>
            <NovoCommit>
            <Img src="src\img\foto.png" alt="" />
            <div>
                <NomePg>Nome - AP</NomePg>
                <DatePg>data - hora</DatePg>
                <CommitPg>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, tenetur!</CommitPg>
            </div>
            </NovoCommit>
        </div>
        
    )
}