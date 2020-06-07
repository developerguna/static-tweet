
import React from 'react';

class Headerdiv extends React.Component {
   constructor(props)
   {
      super();
   this.state=
   {
      heading:props.head
   }
}
    render() {
       var myStyle = {
          fontSize: 50,
          color: '#FF0000',
          textAlign: 'center',
          ':hover':
          {
             color: "#00FF00"
          }
       }
       return (
          <div>
             <h4 style={myStyle}>{this.state.heading}</h4>
          </div>
       );
    }
 }

 export default Headerdiv;