import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListPage from "./pages/ListPage";
import './css/App.css'

function App() {
  /**
  @description: Contains the application logic of the app. Using react-router-dom, a 3rd party library, user can switch between pages.
  **/
  return (
    <div className='App'>
      <Router>
      <Routes> 
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/list' element={<ListPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
