import React from 'react'
import {Link} from 'react-router-dom'
// import login from './Login'
import './SignUp.css'
const SignUp= () => {
  return (
    <div className="cont">
    <p>Have some Houseplants? <div className="login"><Link to="/login">Login</Link></div></p>
    <h2>SignUp</h2>
    <form>
      <div className="name"> <input type="text" className="firstname" placeholder="First Name" />
      <input type="text" placeholder="Last Name" /></div>
      <div className="others">      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <input type="password" placeholder="Confirm Password"/></div>

      <button>SignUp</button>
    </form>
    </div>
  )
}

export default SignUp