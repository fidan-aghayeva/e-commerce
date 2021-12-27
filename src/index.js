/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 27/12/2021 - 22:56:39
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 27/12/2021
 * - Author          : hp
 * - Modification    :
 **/
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
