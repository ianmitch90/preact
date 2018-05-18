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
                        },
                        picture : {
                            large : ''
                        },
                        dob : ''

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

    return (
        
      <div>
        <div className='timePerson'>
        <h2>People of Time!</h2>
        <h2>Time Traveler from : {this.state.DateData.results[0].dob}</h2>
        <div classname='timepersonPic'>
            <img src={this.state.DateData.results[0].picture.large}/>
        </div>
        <h1>{this.state.DateData.results[0].name.first} {this.state.DateData.results[0].name.last}</h1>
        </div>
        
      </div>
    )
  }
}
