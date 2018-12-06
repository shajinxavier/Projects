import React from 'react';
import '../css/App.css';
class CustomerHome extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            { name: 'Louise', age: 27, color: 'red' },
            { name: 'Margaret', age: 15, color: 'blue'},
            { name: 'Lisa', age:34, color: 'yellow'},
            { name: 'Louise', age: 27, color: 'red' },
            { name: 'Margaret', age: 15, color: 'blue'},
            { name: 'Lisa', age:34, color: 'yellow'},
            { name: 'Louise', age: 27, color: 'red' },
            { name: 'Margaret', age: 15, color: 'blue'},
            { name: 'Lisa', age:34, color: 'yellow'}
         ]
      }
   }
   render() {
      return (
        <div className="animated fadeIn">
            <Header/>
            <table border="1">
            <TableHeader/>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 className="fa fa-align-justify">Customer Shipping Details</h1>
         </div>
      );
   }
}
class TableHeader extends React.Component {
  render() {
     return (
      <thead>
      <tr>
        <th>Username</th>
        <th>Age</th>
        <th>Color</th>
      </tr>
      </thead>
     );
  }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
            <td>{this.props.data.color}</td>
         </tr>
      );
   }
}
export default CustomerHome;