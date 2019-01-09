import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import SignUp from './SignUp';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <SignUp />
        <Footer />
      </div>
    );
  }
}

export default App;
