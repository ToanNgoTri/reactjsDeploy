import logo from './logo.svg';
import './App.css';
import { Component , useState} from 'react';

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

function App1 ({num}) {
  const [number, setNum] =  useState(num)
  return(
    <div onClick={ ()=> setNum(number+1)}>
      Bấm vào đây {number}
    </div>
  )
}

export {App1,App};
