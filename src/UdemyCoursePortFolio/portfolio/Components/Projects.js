import React, { Component } from "react";
import projects from "../../data/projects";
import './project.scss'
import  styled from "styled-components"

const Button = styled.a`color:blue`

class Project extends Component {
  render() {
    const { id, title, image, description, link } = this.props.project;
    return (
      <div className="Udemyproject">
        <h3>{title}</h3>
        <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
        <p>{description}</p>
        <Button href={link} target="__blank" >{link}</Button>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="Udemycontainer">
        <h2>Highlighted Projects</h2>
        <div className="UdemyWrapper" style={{margin:"0 auto"}}>
          {projects.map((PROJECT) => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
