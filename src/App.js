/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 26/12/2021 - 00:25:43
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/12/2021
 * - Author          : hp
 * - Modification    :
 **/
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component.jsx'
import './App.css'

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  )
}

export default App
