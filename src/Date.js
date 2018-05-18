import { h, render, Component } from 'preact';





export default class Date extends Component {

    constructor(props){
        super(props)
        this.state = {
            DateData : {
                results: [
                    {
                        name : {
                            first : '',
                            last : ''
                        }

                    }
                ]
            }
            
        }
    }
    
    componentWillMount(){
        fetch('https://randomuser.me/api/?nat=us')
        .then(r=>r.json())
        .then(json=>{
            this.setState({
                DateData : json
            })
            console.log(json)
        })

        // this.interval = setInterval(() => {
        //     fetch('https://randomuser.me/api/?nat=us')
        //     .then(r=>r.json())
        //     .then(json=>{
        //         this.setState({
        //         DateData : json
        //      })
             
        //      console.log(json)
        //     })
        // }, 20000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    
  render() {
      console.log(this.state.DateData.results[0].name.first)
    return (
        
      <div>
        <h2>People of Time!</h2>
        <div className='timePerson'>
        <h1>{this.state.DateData.results[0].name.first} {this.state.DateData.results[0].name.last}</h1>
        </div>
        
      </div>
    )
  }
}
