import React, { Component } from 'react';
import Shell from './components/Shell'
import Loader from './components/Loader';
import './App.css';

class App extends Component {

    // constructor(props) {super(props)}
    
    state = {isLoading: true}

    componentDidMount() {
      this.setState({
        isLoading: false
      })
    }


  render() {
    return (      
        <Shell>  
            <Loader loading={this.state.isLoading}/>
            <h2>PWA React App Boilerplate</h2>
            <ul>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ul>
        </Shell>      
    );
  }
}

export default App;
