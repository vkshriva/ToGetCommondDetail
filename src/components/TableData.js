import React, { Component } from 'react'

export default class TableData extends Component {


    render() {
        console.log('Hi I am in TableData')
        console.log("tst........."+this.props.selectedvalue)
        return (
            <table id="simple-board" className="table">
             <thead><tr>
                 <th>
                     Group
                     </th>
                     <th>
                     Medical
                     </th>
                     <th>
                     Bilto
                     </th>
                 </tr></thead>
                <tbody >
                    
                    <tr>
                    <td>{this.props.selectedvalue}</td>
                    <td>{this.props.selectedvalue2}</td>
                    <td>{this.props.selectedvalue3}</td>
                    </tr>

                </tbody>
            </table>
        )
    }
}