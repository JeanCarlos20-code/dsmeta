import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( //mostra todo conteudo do main atraves do root em index.html
  //App.txs
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
)
