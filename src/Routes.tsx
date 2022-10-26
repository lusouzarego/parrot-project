import {Routes as Wrapper,Route,BrowserRouter} from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import Cadastro from '../src/pages/Cadastro/Cadastro'
import Perfil from './pages/PerfilUser'
import Feed from './pages/Feed'

export default function Routes(){
  return(
    <BrowserRouter>
    <Wrapper>
        <Route path='/login' element={<Login/>} />
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/feed' element={<Feed/>}/>
    </Wrapper>
    </BrowserRouter>
  )
}