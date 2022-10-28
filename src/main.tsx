
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './newSRC/Globalstyle';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <GlobalStyle/>
    <App />
   </React.StrictMode>
)
