import LoginPage from "./pages/LoginPage";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import ListPage from "./pages/ListPage";
import './css/App.css'

function App() {
  /**
  @description: Contains the application logic of the app. Using react-router-dom, a 3rd party library, user can switch between pages.
  **/
  return (
    <div className='App'>
      <Router>
        <Switch> 
          <Route path='/' exact component={LoginPage}/>
          <Route path='/list' component={ListPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
