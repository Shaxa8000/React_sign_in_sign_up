import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  signInClick =() =>{
    this.setState({
      isLoggedIn: false,
    });
  }

  signUpClick =() =>{
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    const isLoggedIn = this.isLoggedIn;

    let button;

    // if (this.state.isLoggedIn) {
    //   button = <SignIn onClick={this.signInClick} />;
    // } else {
    //   button = <SignUp onClick={this.signUpClick} />;
    // }

    return (
      <div>
        {this.state.isLoggedIn ? 
          button = <SignIn onClick={this.signInClick} /> :
          button = <SignUp onClick={this.signUpClick} />
        }
        {/* {button} */}
      </div>
    )
    
  }
}

export default App;
