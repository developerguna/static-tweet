// withAuth.js
import React from "react";
import MyProectedComponent from "./MyProtectedComponent";
import "./withauth.scss";
import lottie from "lottie-web/build/player/lottie_light";
import WelcomeDesignLogo from "../../static/welcomeDesign.json";
import UdemyCourse from "../../UdemyCoursePortFolio/portfolio/Components/app";
import { ModalDialog } from "../../ModalDialog/modal.js"

function WithAuth(Component) {
 
  return class AuthenticatedComponent extends React.Component {
    state = {
      isAuthenticated: false,
    };

    render() {
      const LoginErrorMessage = () => {
        return (
          <div className="Withauth">
            <span>Please</span>
            <button
              onClick={() => {
                this.setState({ isAuthenticated: true });
              }}
            >
              Sign-in
            </button>
            <span> in order to view this part of the application.</span>
          </div>
        );
      };

      return (
        <div className="EntryPointPortal">
          {this.state.isAuthenticated ? (
            <Component {...this.props} />
          ) : (
            <div className="HomePagePortal">
              <UdemyCourse />
           <ModalDialog
                modalAnimationID="ModalBack"
                modalAnimation={true}
                modalBody={true}
                modalTitle="Site is Under Progress"
                modalFooter="Do You really want to visit the site , click"
                modalFCheckTitle="Visit"
                modalClickText="Visit Now"
              />
            

              <div className="HomePagePortalRight">
                 <WelcomePortal {...this.props}/> 
                <LoginErrorMessage />
              </div>
            </div>
          )}
        </div>
      );
    }
  };
}

const WelcomePortal = (props) => {

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#WelcomeDesignLogo"),
      animationData: WelcomeDesignLogo,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);
  return (
    <div className="WelcomePortal">
      {props?.ismobile ? <div id="WelcomeDesignLogo"></div> : null}
    </div>
  );
};




export default (WithAuth(MyProectedComponent))

