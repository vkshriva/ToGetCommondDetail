import React,{Component} from 'react'

export default class DataTable extends Component {

 render(){
     return(
        <div class="table-responsive">          
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anna</td>
              <td>Pitt</td>
              <td>35</td>
              <td>New York</td>
              <td>USA</td>
            </tr>
          </tbody>
        </table>
        </div>
     )
 }

}