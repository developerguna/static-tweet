import React from "react";
import { Link } from "react-router-dom";


const ReactHeader = ({children , onClick}) => {
  return (
    <div className="reactHeaderNav">
      <ul>
        <li>
          <h3>
            <Link to="/userProfile" onClick={onClick}>UserProfile</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to='/learningWidget' onClick={onClick}>Learning Widgets</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to="/resume" onClick={onClick}>Portfolio</Link>
          </h3>
        </li>
        {/* <li>
          <h3>
            <Link to="/layout">Layout</Link>
          </h3>
        </li> */}
        {/* <li>
          <h3>
            <Link to="/jokes">Jokes</Link>
          </h3>
        </li> */}
        {/* <li>   
          <h3>
            <Link to="/hooks">Hooks</Link>
          </h3>
        </li> */}
        {/* <li>  
          <h3>
            <Link to="/fetchrandomuser">Fetchrandomuser</Link>
          </h3>
        </li> */}
        <li>{children}</li>
      </ul>
    </div>
  );
};


export default ReactHeader;
