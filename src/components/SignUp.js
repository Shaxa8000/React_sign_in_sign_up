import React from 'react'

function SignUp(props) {
    return (
        <div className='container'>
        <div className='bg'>
          <h1 className='header'>Sign Up</h1>
          <h5>It's free and only takes a minute</h5>
          <form className='main'>
            <input type='text' placeholder='FIRSTNAME' />
            <input type='text' placeholder='LASTNAME' />
            <input type='text' placeholder='EMAIL' />
            <input type='text' placeholder='PASSWORD' />
            <input type='text' placeholder='CONFIRM PASSWORD' />
            <button onClick={props.onClick} className='btn'>Sign Up</button>
            <p>
              By clicking the Sign Up button you agree to our <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    );
}

export default SignUp
