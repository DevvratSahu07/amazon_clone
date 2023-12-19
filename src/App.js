import React from 'react'
// import LandingPage from './components/layout/LandingPage'
import NavbarContainer from './components/layout/Navbar/NavbarContainer'
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
function App() {
  return (
    <div>
      {/* <LandingPage/> */}
      <NavbarContainer/>
      <LoginContainer/>
      <Footer/>
    </div>

  )
}



export default App