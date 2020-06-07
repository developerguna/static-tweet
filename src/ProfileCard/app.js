
import React from 'react';
import {Content} from '../ProfileContent/app';
import Headerdiv from '../HeaderDiv/app'
import {App} from '../App';


const ProfileCard = () => (
    <div class="profileCard">
       <header><Headerdiv head="Profile Card"></Headerdiv></header>
 
       <App name="Nagaraj goud" years="6.5">
          <Content account="TCS Interactive " project="Mars" role="Lead" /></App>
 
       <App name="Palguna Ganta" years="2">
          <Content account="TCS Interactive" project="Corteva" role="Developer" /></App>
       <App name="Sampath M" years="6">
          <Content account="TCS Interactive" project="Mars" role="Lead" /></App>
       <App name="Areeb shaik md" years="3.5" role="Developer" ><Content account="TCS Interactive" project="DuPont" role="Lead" /></App>
       
 
 
    </div>
 );
 
 export default ProfileCard;