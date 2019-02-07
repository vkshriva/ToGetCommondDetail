import React, { Component, Fragment } from 'react'
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead'
import TableData from './TableData'

export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""

        }
        this.handleSearch = this.handleSearch.bind(this)
        //this.handleValueOnChange=this.handleValueOnChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
    }

    handleClick() {
        if (this.props.selectedDropDownVal == this.props.dropdownArray[0])
            this.setState({ tableValue: this.state.selected })
        else if (this.props.selectedDropDownVal == this.props.dropdownArray[1])
            this.setState({ tableValue2: this.state.selected })
        else if (this.props.selectedDropDownVal == this.props.dropdownArray[2])
            this.setState({ tableValue3: this.state.selected })
        else if (this.props.selectedDropDownVal == this.props.dropdownArray[3])
            this.setState({ tableValue4: this.state.selected })
            
        this.setState({selected:""})

    }

    handleClick2() {



    }

    handleClick3() {

        this.setState({ tableValue3: this.state.selected3 })


    }


    handleSearch(event) {
        //console.log('event', event);
        //console.log('selectedValue.......',this.state.selectedValue)

    }

    /*handleValueOnChange(value){
     console.log('value.......',value)
     this.setState({value})
     console.log('selectedValue.......',this.state.value)
    }*/

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-sm-7">
                        <Typeahead
                            //onSearch={this.handleSearch}
                            options={this.props.suggestions}
                            onChange={(s) => {
                                this.setState({ selected: s })
                            }}
                            placeholder="Choose a state..."
                            selected={this.state.selected}
                        />
                    </div>
                    <div className="col-sm-1">
                        <a href="#" className="btn btn-info btn-lg" onClick={this.handleClick}>
                            <span className="glyphicon glyphicon-plus"></span> Plus
                         </a>
                    </div>
                    {/*<div className="col-sm-3">
                        <Typeahead
                            //onSearch={this.handleSearch}
                            options={["abcaaa", "bcddsd", "aaaaaas", "de"]}
                            onChange={(s) => {
                                this.setState({ selected2: s })
                                console.log("********" + this.state.selected2)
                            }}
                            placeholder="Choose a state..."
                            selected={this.state.value}
                        />
                    </div>
                    <div className="col-sm-1">
                        <a href="#" className="btn btn-info btn-lg" onClick={this.handleClick2}>
                            <span className="glyphicon glyphicon-plus"></span> Plus
                         </a>
                    </div>
                    <div className="col-sm-3">
                        <Typeahead
                            //onSearch={this.handleSearch}
                            options={["abcaaa", "bcddsd", "aaaaaas", "de"]}
                            onChange={(s) => {
                                this.setState({ selected3: s })
                                console.log("********" + this.state.selected3)
                            }}
                            placeholder="Choose a state..."
                            selected={this.state.value}
                        />
                    </div>
                    <div className="col-sm-1">
                        <a href="#" className="btn btn-info btn-lg" onClick={this.handleClick3}>
                            <span className="glyphicon glyphicon-plus"></span> Plus
                         </a>
                    </div>
                     */}
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">

                    <div className="col-sm-10">
                        <TableData selectedvalue={this.state.tableValue} selectedvalue2={this.state.tableValue2}
                            selectedvalue3={this.state.tableValue3} 
                            selectedvalue4={this.state.tableValue4} />
                    </div>
                </div>
            </Fragment>
        );
    }
}