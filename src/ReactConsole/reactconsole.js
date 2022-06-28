import React, { Component } from "react";

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(this.name, ":", this.age);
  }
}
const animal1 = new Animal("palguna", "24");
animal1.speak();

class RegularClass {}

class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();

const componentClassInstance = new ComponentClass();

console.log("regularClassInstance", regularClassInstance);

console.log("componentClassInstance", componentClassInstance);

class UdemyCourseconsole extends Component {
    state={displayBio:false}
 /*  constructor() {
    super();
    this.state = {
      displayBio: false,
    };
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  } 
  toggleDisplayBio()
  {
      this.setState({displayBio:!this.state.displayBio})
  }
  */

 toggleDisplayBio = () =>
 {
     this.setState({displayBio:!this.state.displayBio})
 }
  render() {
    return (
      <div className="udemycourse">
        <h1>Hello!</h1>
        <p>i am palguna ganta,age :24</p>
       { this.state.displayBio ? (
        <div className="">
          <p>toggle content</p>
          <button onClick={this.toggleDisplayBio}>Show Less</button>
        </div>
        ):(
        <div>
          <button onClick={this.toggleDisplayBio}>Read More!</button>
        </div>
        )
  }
      </div>
        
    );
  }
}



new Promise((resolve,reject) =>{setTimeout(() =>
  {
   
    console.log("Palguna");

  }
    ,2000);
  })
.then(() => {console.log('ganta');})
.catch(error => console.log('error',error)) ;


export default UdemyCourseconsole;
