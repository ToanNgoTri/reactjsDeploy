import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = props

  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={()=>{this.setState({index: Number(this.state.index) +1})}}>
          toàn yêu bạn {this.state.index}
        </p >
      </header>
    </div>
  )
  }
}

export default App;
