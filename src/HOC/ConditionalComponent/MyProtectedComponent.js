// MyProtectedComponent.js
import React from "react";
import Basic from "../../basicform/basicform";



 class MyProectedComponent extends React.Component {
    /**
     * Render
     */
    render() {
        return (
            <div>
                <Basic/>
            </div>
        );
    }
}

// Now wrap MyPrivateComponent with the requireAuthentication function 
export default MyProectedComponent;
