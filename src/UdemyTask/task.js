import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const Userinput = (props) =>
{
    return(
        <input type="text" onChange={props.change} value={props.username}/>
    )
}

const Useroutput = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.username}</p>
        </div>
    )
}





class UdemyTask extends React.Component {
    state = {
       userName: "Palguna"
    }
    changemethod = (event) => {
       this.setState({ userName: event.target.value });
    }
    render() {
       return (
          <div className="udemyTask">
             <ol>
                <li>step1</li>
                <li>step2</li>
             </ol>
             <Userinput username={this.state.userName} change={this.changemethod} />
             <Useroutput username={this.state.userName} />
             <Useroutput username="Nagaraj Goud" />
          </div>
       );
    }
 
 }
 
 export default UdemyTask;