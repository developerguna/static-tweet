// withAuth.js
import React from "react";
import MyProectedComponent from "./MyProtectedComponent";
import './withauth.scss'

function WithAuth(Component) {
    return class AuthenticatedComponent extends React.Component {
        state=
        {
            isAuthenticated:false
        }

        /**
         * Render
         */
        render() {
            const loginErrorMessage = (
                <div className="Withauth">
                    Please <button onClick={() =>{this.setState({isAuthenticated:true})}}>login</button> in order to view this part of the application.
                </div>
            );

            return (
                <div>
                    { this.state.isAuthenticated ? <Component {...this.props} /> : loginErrorMessage }
                </div>
            );
        }
    };
    
}



export default WithAuth(MyProectedComponent);
