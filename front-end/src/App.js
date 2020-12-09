import React, { Component } from "react";
import { Container, Table } from "reactstrap";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {students: []};
  }

    showForm = () => {
    const Students = this.state.students;
   return (
     <div> 
    <form id= "add-app">
		<Table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mtr. Number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
      <tr scope = "row">
      	<td>
      		<input type="text" value={Students.firstName}/>
      	</td>
      </tr>
      
      
      </tbody>
        </Table>

         <button>Create</button>
      </form>
      </div>
    );}


  componentDidMount(){
    
     fetch("/students", {
      headers: {
			  "Access-Control-Allow-Origin": "http://localhost:8080",
			  "Accept": "application/json",
			  "Content-Type": "application/json"
			}
     }).then(response =>
      response
        .json()
        .then(data => this.setState({students: data}))
    );
    const r = 4;
  }

  render(){
    const Students = this.state.students;

    if (Students == undefined) {
      return <p>Failed to load data.</p>;
    }
    const StudentList = Students.map(Student => {
      return (
        <tr scope="row">
          <td>{Student.firstName}</td>
          <td>{Student.lastName}</td>
          <td>{Student.matriculationNumber}</td>
          <td>{Student.address}</td>
        </tr>
      );
    });
    
    
    return (
      <div>
        <Container fluid>
        <Table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mtr. Number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>{StudentList}</tbody>
    </Table>
        </Container>
        <button  onClick={() => this.setState({showForm: true}) }>Update</button>
        
      </div>
    );
  }
}
    

export default App;
