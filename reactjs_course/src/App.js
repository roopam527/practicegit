import React, { Component } from 'react';
import Person from "./Person/Person";
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id:"1" ,name:'Roopam' , age : 17},
      {id:"2" ,name: 'Sukhi' , age : 17},
      {id:"3" , name: "Rohit" , age : 19}
    ]
  }

  switchNameHandler = () =>{
    console.log("Was Clicked !");
    this.setState({
      persons:[
        {id:"1", name:"Roopam" , age : 17},
        {id:"2", name: "Sukhi"  , age : 17},
        {id:"3",  name:"Rohit"   , age : 19}
      ]
    })
  }
  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
  nameChangedHandler = (event) =>{
    this.setState({
      persons:[
        {name:"Roopam", age : 17},
        {name:event.target.value   , age : 17},
        { name:"Rohit"  , age : 19}
      ],
      showPersons : false
    })
  }
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
   this.setState({showPersons : !doesShow})
  }
  
  render() {
    const style = {
      backgroundColor : "white",
      font : "inherit",
      border:"1px solid blue",
      padding : "8px",
      cursor: "pointer"
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
                  name = {person.name}
                  age = {person.age}
                  key = {person.id}
                  click = {() => this.deletePersonHandler(index)}
                  />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>HI, NEW STARTING</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div',null,React.createElement('h1',{className:'App'},'Hi , I am React App!!!'));

  }
}

export default App;
