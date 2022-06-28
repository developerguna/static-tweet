import React, { Component } from "react";
import profile from "../assets/Palguna_profile.jpg";
import SocialProfiles from "./SocialProfile";
import Projects from "./Projects";
import PortfolioTitle from "./title";
import Jokes from "./jokes";

class UdemyCourse extends Component {
  state = { displayBio: false };
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div className="udemycourse">
        <div className="Udemycontainer">
          <img src={profile} alt="profile" className="profile" />
          <h1>Hello!</h1>
          <p>My Name is Palguna Ganta</p>

          <span>React Developer</span>
          <PortfolioTitle />
          <hr />
          <SocialProfiles />

          {this.state.displayBio ? (
            <div className="displayBio">
              <Projects />
              <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read More!</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UdemyCourse;
