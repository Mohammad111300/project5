import { Link } from 'react-router-dom'
import './register.scss'


function Register() {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Lama Social!</h1>
          <p>
            The company itself is a very successful company. 
            When I am free, otherwise, the entire training 
            itself will never be worth it, for it will result in error.
          </p>
          <span>Do Have an Account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Name'/> 
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
