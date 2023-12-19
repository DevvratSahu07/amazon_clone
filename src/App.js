import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/layout/LandingPage'
import NavbarContainer from './components/layout/Navbar/NavbarContainer'
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';
function App() {
  const Landing = () => (<LandingPage/>)
  const Login = () => (<LoginContainer/>)
  const Register = () => (<RegisterContainer/>)
  return (
    <Router>
        <div>
          <NavbarContainer/>
            <Routes>
              <Route exact path='/' Component={Landing}/>
              <Route exact path='/login' Component={Login}/>
              <Route exact path='/register' Component={Register}/>
            </Routes>
          <Footer/>
        </div>
    </Router>

  )
}



export default App