import React from "react";
import "./myprofile.css";
import resumepdf from "../documents/Palguna_Resume_latest.pdf";
import styled from "styled-components";
const RolsandResponsibilities = styled.div`
  ol li {
    font-size: 16px;
    margin: 5px auto;
    list-style-type: disclosure-open;
  }
`;
const Myprofile = () => {
  return (
    <div id="profile" className="background-div">
      <section id="resume">
        <div className="Heading-Resume">
          <div className="intro">
            <h2>Palguna Ganta</h2>
            <h4>UI Developer</h4>
          </div>
          {/* <img alt="Resume" src={ResumePhoto} /> */}
          <a href={resumepdf} download style={{ color: "blue" }}>
            <b>Download Resume</b>
          </a>
        </div>
        <div className="portfolio">
          <div className="mainfolio header-col">
            <div className="objective">
              <p>
                Aim to be associated with progressive organization that gives me
                a challenging opportunity and scope to update my knowledge and
                skills in accordance with the latest trends and to be a part of
                team that dynamically works towards the growth of organization
                and gives me immense satisfaction.
              </p>
            </div>

            <div className="experience">
              <h3>Experience</h3>
              <div className="resume-content">
                <ul>
                  <li>
                    <b>UI Developer</b>
                    <p>TATA Consultancy Services</p>
                    <p>03/2018 - Present, Hyderabad</p>
                  </li>
                </ul>
                <h4>
                  <p>
                    <b>Roles & Responsibilities</b>
                  </p>
                </h4>
                <RolsandResponsibilities>
                  <ol>
                    <li>
                      Developed Front-end application's using HTML , CSS ,
                      JavaScript, ReactJS (Framework for Single Page Application
                      ) In Adobe Experience Management Tool.
                    </li>
                    <li>
                      Involved in analysis of Business and Technical requirement
                      Discussions.
                    </li>
                    <li>
                      Suggested Improvements to business as per their
                      requirements.
                    </li>
                    <li>
                      Delivered the key Module Development Activities with
                      providing 100% proper design without Responsive Web Design
                      Impacting.
                    </li>
                    <li>
                      Minimizing the code size by putting business logic in a
                      easy/Innovative approach and taking inputs from the client
                      and team members as per the requirement without any
                      deviations of coding standards.
                    </li>
                    <li>
                      Received Appreciations and awards from Organization.
                    </li>
                  </ol>
                </RolsandResponsibilities>
              </div>
            </div>
            <div className="technicaKnowledge">
              <h3>Technical Skills</h3>
              <div className="resume-content">
                <ul className="outerList">
                  <li className="Frameworks">
                    Web Development Framework’s
                    <ul className="innerList">
                      <li>ReactJS</li>
                    </ul>
                  </li>
                  <li className="ProgrammingLanguages">
                    Programming Languages
                    <ul className="innerList">
                      <li>Java2SE Basics</li>
                    </ul>
                  </li>
                  <li className="MS-Office">Proficient in MS -Office</li>
                  <li className="Tools">
                    Tools
                    <ul className="innerList">
                      <li>Adobe Experience Management 6.3,6.4 and 6.5</li>
                    </ul>
                  </li>
                  <li className="WebTechnologies">
                    WebTechnologies
                    <ul className="innerList">
                      <li>HTML5, CSS3, JavaScript, Jquery.</li>
                      <li>Bootstrap-4, LESS,SASS.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="education">
              <h3>Education</h3>
              <div className="resume-content">
                <table className="educationtable">
                  <thead>
                    <tr>
                      <th>Qualification</th>
                      <th>College/Institution</th>
                      <th>University</th>
                      <th>Year</th>
                      <th>Grade(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MCA</td>
                      <td>SASTRA</td>
                      <td>Thanjavur Sastra</td>
                      <td>2018-2021</td>
                      <td>8.1(CGPA)</td>
                    </tr>
                    <tr>
                      <td>BSc(MECs)</td>
                      <td>Badruka College</td>
                      <td>Osmania</td>
                      <td>2014-2017</td>
                      <td>82%</td>
                    </tr>
                    <tr>
                      <td>10+2(MPC)</td>
                      <td>Narayana Junior College</td>
                      <td>State Board of AP</td>
                      <td>2011-2013</td>
                      <td>92</td>
                    </tr>
                    <tr>
                      <td>SSC</td>
                      <td>Z.P.H.S Boys Malkajgiri </td>
                      <td>State Board of AP</td>
                      <td>2011</td>
                      <td>86</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="achievements">
              <h3>ACHIEVEMENTS</h3>
              <div className="resume-content">
                <div className="achievementrow">
                  <b>Applause/Appreciation Award</b>
                  <p>
                    Received this award for putting more efforts to make
                    production as Business needed
                  </p>
                </div>
                <div className="achievementrow">
                  <b>Star of the Month Award</b>
                  <p>
                    Received for Fixing the Bugs / Improvements tasks in a month
                  </p>
                </div>
                <div className="achievementrow">
                  <b>Star Team Award</b>
                  <p>Received for Team Contribution on Multiple Productions</p>
                </div>
              </div>
            </div>
            <div className="awards">
              <h3>HONOR AWARDS</h3>
              <div className="resume-content">
                <div className="awardsrow">
                  <b>Inspire Award</b>
                  <p>
                    Inspire Award by Department of Science and Technology for
                    Science exhibition of project work
                  </p>
                </div>
                <div className="awardsrow">
                  <b>Talhunt-2010</b>
                  <p>
                    Certificate of Merit Talhunt-2010 by Cognizant Outreach
                    program.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="personal-info">
            <div className="rows info">
              <div className="Basic-info header-col">
                <ul>
                 <li className="email">
                    <i className="fa fa-envelope"></i>
                   <span style={{display: "inline-block"}}> <a href="mailto:gantapalguna@gmail.com">
                      <p>gantapalguna@gmail.com</p>
                    </a>
                    </span>
                  </li>
                  <li className="contact">
                    <i className="fa fa-phone"></i>
                    <span>+91-8374993235</span>
                  </li>
                  <li className="Address">
                    <i className="fa fa-map-marker" />
                    <span>Hyderabad,India</span>
                  </li>
                  <li className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  
                  <span style={{display: "inline-block"}}><a href="https://www.linkedin.com/in/palguna-ganta-2a57b8158/">
                    https://www.linkedin.com/in/palguna-ganta-2a57b8158/
                  </a>
                  </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rows skill">
              <div className="header-col">
                <h3>
                  <b>Skills</b>
                </h3>
              </div>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand css" />
                    <em>CSS</em>
                  </li>
                  <li>
                    <span className="bar-expand html5" />
                    <em>HTML5</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>JavaScript</em>
                  </li>
                  <li>
                    <span className="bar-expand reactjs" />
                    <em>ReactJs</em>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rows languages">
              <div className="header-col">
                <h1>
                  <span>LANGUAGES</span>
                </h1>
              </div>
              <ul>
                <li>
                  <b>English</b>
                  <p>Professional Working Proficiency</p>
                </li>
                <li>
                  <b>Hindi</b>

                  <p>Professional Working Proficiency</p>
                </li>
                <li>
                  <b>Telugu</b>
                  <p>Native or Bilingual Proficiency</p>
                </li>
              </ul>
            </div>
            <div className="rows intrests">
              <div className="header-col">
                <h1>
                  <span>INTERESTS</span>
                </h1>
              </div>
              <ul>
                <li>
                  <span>Volleyball</span>
                  <span>Cricket</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Myprofile;
