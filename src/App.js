import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/layout/LandingPage'
import NavbarContainer from './components/layout/Navbar/NavbarContainer'
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import YourAccountContainer from './components/YourAccount/YourAccountContainer';
function App() {
  const Landing = () => (<LandingPage/>)
  const Login = () => (<LoginContainer/>)
  const Register = () => (<RegisterContainer/>)
  const yourAccount = () => (<YourAccountContainer/>)
  return (
    // <Provider store={store}>
    <Router>
        <div>
          <NavbarContainer/>
            <Routes>
              <Route exact path='/' Component={Landing}/>
              <Route exact path='/login' Component={Login}/>
              <Route exact path='/register' Component={Register}/>
              <Route exact path='/your_account' Component={yourAccount}/>
            </Routes>
          <Footer/>
        </div>
    </Router>
    // </Provider>

  )
}



export default App