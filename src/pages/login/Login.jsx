import { Link } from 'react-router-dom'
import './login.scss'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext"


function Login() {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            The company itself is a very successful company. 
            When I am free, otherwise, the entire training 
            itself will never be worth it, for it will result in error.
          </p>
          <span>Don't Have an Account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password'/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
