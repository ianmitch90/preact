import './App.css'
import NavBar from './NavBar'

import {h, Component} from 'preact'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      toggleLNG : true
    }

    this.languageHandler = this.languageHandler.bind(this)
  }

  languageHandler(){
    this.setState(prevState => ({
      toggleLNG : !prevState.toggleLNG
    }))
  }
  render() {



    return <div className="App">
      <div className="App-heading App-flex">
        <h2>{this.state.toggleLNG ? 'Current Time' : '今の時間'}</h2>
        <button onClick={this.languageHandler}>🇯🇵/🇺🇸</button>
        <h3><NavBar/></h3>
      </div>
        <h3> some sort of descriptive statment.</h3>
     
      
    </div>
  }
}
