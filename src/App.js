import React, { Component } from 'react';
import Shell from './components/Shell'
import Loader from './components/Loader';
import FetchPlayers from './utils/FetchPlayers';
import './App.css';

class App extends Component {    
    
    state = {isLoading: true}

    componentDidMount() {
      this.setState({
        isLoading: false        
      })
    }


  render() {
    return (      
        <Shell title='NBA Stats'>  
            <Loader loading={this.state.isLoading}/>           
            <FetchPlayers />            
        </Shell>      
    );
  }
}

export default App;
