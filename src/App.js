import './App.css'
import NavBar from './NavBar'
import Date from './Date'
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
        <h1>{this.state.toggleLNG ? 'Current Time' : '今の時間'}</h1>
        <button onClick={this.languageHandler}>🇯🇵/🇺🇸</button>
        <h3><NavBar/></h3>
      </div>
        
      <Date/>
     
      
    </div>
  }
}
