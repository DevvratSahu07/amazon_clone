import React from 'react'
import LandingPage from './components/layout/LandingPage'
import NavbarContainer from './components/layout/Navbar/NavbarContainer'
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const Landing = () => (<LandingPage/>)
  const Login = () => (<LoginContainer/>)
  return (
    <Router>
        <div>
          <NavbarContainer/>
            <Routes>
              <Route exact path='/' Component={Landing}/>
              <Route exact path='/login' Component={Login}/>
            </Routes>
          <Footer/>
        </div>
    </Router>

  )
}



export default App