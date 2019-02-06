import React, { Component } from 'react'
import AutoComplete from './components/AutoComplete'
//import DataTable from './components/DataTable'

const arrayA=["abc","bcd","aa","de"]
const arrayB=["ABC","BCD","AA","DE",'AAAAAA']
export default class App extends Component{
 
  constructor(props){
    super(props)
    this.handleSuggestion1 = this.handleSuggestion1.bind(this);
  }
  
  state={suggestion1:arrayA,
  selectedVal:null,
  state2:"",state3:"",state4:""}
  
  handleSuggestion1(selectedValue){
    console.log('selectedValue...',selectedValue)
    this.setState({suggestion1:arrayB});
  }
    render(){
      return(
        <div className="container">
        <div className="col-sm"><AutoComplete suggestions={this.state.suggestion1} handleSuggestion={this.props.handleSuggestion1} />
        </div>
        
       
        </div>
      )
    }
}
