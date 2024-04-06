import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/Login'
import Home from './components/Home'
import FirstPage from './components/FirstPage'

function App() {
  

  return (
   
    <BrowserRouter>
    <Routes>
    <Route path = "/" element= {<FirstPage />}></Route>
      <Route path = "/signup" element= {<Signup />}></Route>
      <Route path = "/login" element= {<Login />}></Route>
      <Route path = "/home" element= {<Home />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
