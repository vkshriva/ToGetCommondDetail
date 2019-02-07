import React, { Component } from 'react'

export default class DropdownList extends Component {
    constructor(props) {
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(event) {
        //this.setState({ selectedDropDown: event.target.value });
        this.props.handleSuggestion( event.target.value)


    }

    state = {
        selectedDropDown: "Select",
        dropDownList: this.props.dropdownArray
    }

    render() {
        return (
            <div>
                <div>
                    <select className="browser-default custom-select" onChange={this.handleOnChange}>
                        <option>Select</option>
                        {this.state.dropDownList.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>
                </div>
            </div>
        )
    }

}