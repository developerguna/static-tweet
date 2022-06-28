


import React from 'react';
import './profilecontent.css'

const Content = (props) => {
    return (
        <div>
            <h2>Account :<span>{props.account}</span></h2>
            <h3>Project :{props.project}</h3>
            <p>Front End Developer: {props.role} </p>
        </div>
    );
}
const Profile = (props) => {
    const style3 =
    {
        display:'inline-block',
        margin: '10px'
    }
    return (
        <div onClick={props.click} style={style3}>
            <h1>{props.name}</h1>
            <a href={props.href}  rel="noopener noreferrer" target="_blank">Learn More</a>
        </div>
    )
}

export {Content,Profile}