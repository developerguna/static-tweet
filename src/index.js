import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './utill.css';
import {HeaderNav} from './Header/app'
import LoginPage from './LoginForm/Login'
import FooterNav from './Footer/app';



const FirstPage = () =>
{
  return(
    <div className="FirstPage">
      <HeaderNav user="Palguna Ganta"/>
      
     <FooterNav /> 
    </div>
    
    
  )
}

ReactDOM.render(<FirstPage />, document.querySelector('#Page'));

if (module.hot) {
  module.hot.accept();
}

