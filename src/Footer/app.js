
import React from 'react';
import './footer.css';
import App4 from '../App4/app'
class Footer extends React.Component {
    render() {
       return (
          <div className="footer">
             <h2>{this.props.footerprop}</h2>
          </div>
       );
    }
 }

class FooterNav extends React.Component {
    constructor(props) {
       super(props);
       this.state =
       {
          footer: "FOOTER"
       }
    }
    render() {
       return (
          <div className="PageFooter">
             <Footer footerprop={this.state.footer} />
             <App4 />
          </div>
       )
    }
 
 }
 
 export default FooterNav;