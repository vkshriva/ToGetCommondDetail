import React, { Component } from 'react'
import AutoComplete from './components/AutoComplete'
import DropdownList from './components/DropdownList'

const arrayBillTo = ["ABC_BT", "BCD_BT", "AA_BT", "DE_BT", "AAAAAA_BT"]
const arrayGrp = ["ABC_GRP", "BCD_GRP", "AA_GRP", "DE_GRP", 'AAAAAA_GRP']
const arrayA = ["ABC_A", "BCD_A", "AA_A", "DE_A", 'AAAAAA_A']
const arrayB = ["ABC_B", "BCD_B", "AA_B", "DE_B", 'AAAAAA_B']
const dropDownArray1 = ['Group', 'BillTo', 'a', 'b']
export default class App extends Component {

  constructor(props) {
    super(props)
    this.handleSuggestion1 = this.handleSuggestion1.bind(this);

  }

  state = {
    suggestion1: [],
    selectedDropDownVal: "",
    state2: "", state3: "", state4: "",
    dropDownArray1: dropDownArray1
  }
  

  handleSuggestion1(selectedValue) {
    console.log('selectedValue...', selectedValue)
    this.setState({selectedDropDownVal:selectedValue})
    switch (selectedValue) {
      case this.state.dropDownArray1[0]:
        this.setState({ suggestion1: arrayGrp });
        break;
      case this.state.dropDownArray1[1]:
        this.setState({ suggestion1: arrayBillTo });
        break;
      case this.state.dropDownArray1[2]:
        this.setState({ suggestion1: arrayA });
        break;
      case this.state.dropDownArray1[3]:
        this.setState({ suggestion1: arrayB });
        break;
      default:
        this.setState({ suggestion1: [] });
        break;
    }

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <DropdownList
              handleSuggestion={this.handleSuggestion1}
              dropdownArray={this.state.dropDownArray1} /></div>
          <div className="col-sm-7">
          <AutoComplete suggestions={this.state.suggestion1}
            selectedDropDownVal={this.state.selectedDropDownVal}
            dropdownArray={this.state.dropDownArray1}
           />
          </div>
        </div>


      </div>
    )
  }
}
