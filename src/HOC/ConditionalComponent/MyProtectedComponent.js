// MyProtectedComponent.js
import React from "react";
import FirebaseApp from "../../firebaseComponents/App";

class MyProectedComponent extends React.Component {
  /**
   * Render
   */
  render() {
    return (
      <div>
      <FirebaseApp/>
        
      </div>
    );
  }
}

// Now wrap MyPrivateComponent with the requireAuthentication function
export default MyProectedComponent;
