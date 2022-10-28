import {Routes as Wrapper,Route,BrowserRouter} from 'react-router-dom'
import { LoginNv } from './newSRC/pages/Login'
import { CadastroNv } from './newSRC/pages/Cadastro'







export default function Routes(){
  return(
    <BrowserRouter>
    
         <Wrapper>
        <Route path='/login' element={<LoginNv/>} />
        <Route path='/cadastro' element={<CadastroNv/>}/>
           </Wrapper>
   
    </BrowserRouter>
  )
}