import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {

  state = {
    username: 'Siamak'

  };

  inputChangedHandler = (event) => {
    this.setState({username: event.target.value})

  }

  render() {
    return (
      <div className="App">
       <h1>react exercise</h1> 
       <UserInput 
       changed={this.inputChangedHandler}
       currentName={this.state.username} />
       <UserOutput userName="Asal" />
       <UserOutput userName={this.state.username} />
       <UserOutput userName="Asal" />
      </div>
    );
  }
}

export default App;
