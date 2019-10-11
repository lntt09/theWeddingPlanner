import React, {Component} from 'react';
import Planners from './components/Planner/Planners'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      items : []
    } 
  }
  render(){
    return(
      <div className="App">
        <Planners />
      </div>
    )
  }
}


export default App;
