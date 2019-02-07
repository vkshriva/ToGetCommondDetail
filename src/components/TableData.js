import React, { Component } from 'react'

export default class TableData extends Component {


    render() {
        return (
            <table id="simple-board" className="table">
             <thead><tr>
                 <th>
                     Group
                     </th>
                     <th>
                     Bilto
                     </th>
                     <th>
                     A
                     </th>
                     <th>
                     B
                     </th>
                 </tr></thead>
                <tbody >
                    
                    <tr>
                    <td>{this.props.selectedvalue}</td>
                    <td>{this.props.selectedvalue2}</td>
                    <td>{this.props.selectedvalue3}</td>
                    <td>{this.props.selectedvalue4}</td>
                    </tr>

                </tbody>
            </table>
        )
    }
}