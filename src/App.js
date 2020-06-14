import React from 'react';
import './App.css';

const App = (props) => {
  var personstyle=
  {    
    ':hover':
    {   
        color:"red"     
    }
  
  }

  return (

    <div className="person" style={personstyle}>
      <h1 >{props.name}</h1>
      <p>Experience : {props.years}</p>
      <div>{props.children}</div>

    </div>
  );
}




export { App } ;