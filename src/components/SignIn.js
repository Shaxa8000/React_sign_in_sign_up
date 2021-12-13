import React from 'react';
import './signin.css';

function SignIn(props) {
    return (
      <div className='container'>
        <div className='bg'>
          <h1 className='header'>Welcome Back</h1>
          <h5>We missed you? Login to get Started</h5>
          <h4 className='login'>LOGIN</h4>
          <form className='main'>
            <input type='text' placeholder='EMAIL' />
            <input type='text' placeholder='PASSWORD' />
            <button className='btn'>Sign in</button>
            <p>
              Don't have an account?
              <a className="regLink" onClick={props.onClick}>
                <b>Register Instead</b>
              </a>
            </p>
          </form>
        </div>
      </div>
    );
}

export default SignIn;
