import {Routes as Wrapper,Route,BrowserRouter} from 'react-router-dom'
import { LoginNv } from './pages/Login'
import { CadastroNv } from './pages/Cadastro'
import FeedNv from './pages/Feed'
import PerfilNv from './pages/Perfil'







export default function Routes(){
  return(
    <BrowserRouter>
    
         <Wrapper>
        <Route path='/login' element={<LoginNv/>} />
        <Route path='/cadastro' element={<CadastroNv/>}/>
        <Route path='/feed' element={<FeedNv/>}/>
        <Route path='/perfil' element={<PerfilNv/>}/>
           </Wrapper>
   
    </BrowserRouter>
  )
}