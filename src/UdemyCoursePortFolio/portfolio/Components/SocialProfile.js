import React, { Component } from "react";
import SOCIAL_PROFILES from "../../data/socialProfiles";

class SocialProfile extends Component {
  render() {
    const { link,image } = this.props.socialprofile;
    return (
      <span className="UdemySocialProfile">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="social-profile" style={{ width: 35, height: 35 , margin:10 }} />
            </a>
      </span>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div className="UdemySocialProfilecontainer">
        <h2>Connect with me!</h2>
        <div className="UdemySocialProfileWrapper">
          {SOCIAL_PROFILES.map((SOCIAL_PROFILES) => {
            return <SocialProfile key={SOCIAL_PROFILES.id}  socialprofile={SOCIAL_PROFILES} />;
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
