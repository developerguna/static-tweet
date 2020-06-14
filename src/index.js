import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './utill.css';
import  WithAuth  from './HOC/ConditionalComponent/WithAuth';




const FirstPage = () =>
{
  return(
    <div className="FirstPage">
      
      <WithAuth/>
    </div>
    
    
  );
}



ReactDOM.render(<FirstPage />, document.querySelector('#Page'));

if (module.hot) {
  module.hot.accept();
}

export default FirstPage

