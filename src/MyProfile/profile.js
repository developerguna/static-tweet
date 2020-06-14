import React from 'react';
import './myprofile.css'
import ResumePhoto from '../images/photo.jpg'



const Myprofile = () => {
  return (
    <div className="background-div">
      <section id="resume">
        <div className="Heading-Resume">
          <div className="intro">
            <h2>Palguna Ganta</h2>
            <h4>UI Developer</h4>
          </div>
          <img alt="Resume-photo" src={ResumePhoto} /> 
        </div>
        <div className="portfolio">
          <div className="mainfolio">
            <div className="objective">

              <p> Aim to be associated with progressive organization that gives me a
              challenging opportunity and scope to update my knowledge and skills
              in accordance with the latest trends and to be a part of team that
              dynamically works towards the growth of organization and gives me immense
              satisfaction.
              </p>
            </div>

            <div className="experience"><h3>Experience</h3></div>
            <div className="technicaKnowledge">
              <h3>Technical Skills</h3>
              <div className="resume-content">
              <ul className="outerList">
                <li className="Frameworks">
                  Web Development Framework’s
                    <ul className="innerList">
                    <li>ReactJS</li>
                    <li>VueJS</li>
                  </ul>
                </li>
                <li className="ProgrammingLanguages">
                  Programming Languages
                    <ul className="innerList">
                    <li>Java2SE</li>
                    <li>Python Basics (Machine Learning, Data Visualization)</li>
                  </ul>
                </li>
                <li className="MS-Office">Proficient in MS -Office</li>
                <li className="Tools">
                  Tools
                    <ul className="innerList">
                    <li>Adobe Experience Management 6.2 and 6.4</li>
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
              <table className="education">
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
                  <td>NA</td>
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
            <div className="extraCurricular"><h3>Experience</h3><div className="resume-content"></div></div>
            <div className="certificates"><h3>Experience</h3><div className="resume-content"></div></div>
          </div>
          <div className="personal-info">
            <div className="row info">
              <div className="header-col">
                <h1><span>Personal Info</span></h1>
              </div>
              <div className="Basic-info">
                <ul>
                  <li className="Address">
                    <h3>Address</h3>
                    <p>H.No 30-142/11 Creative Nagar</p>
                    <p>A S Rao Nagar,ECIL</p>
                    <p>Hyderabad,500062</p>
                  </li>
                  <li className="phone">
                    <h3><strong>Phone</strong></h3>
                    <p>+91-8374993235</p>
                  </li>
                  <li className="email">
                    <h3><strong>Email</strong></h3>
                    <a><p>gantapalguna@gmail.com</p></a></li>
                  <li className="linkedin">
                    <h3><strong>Linkedin</strong></h3></li>
                  <a href="https://www.linkedin.com/in/palguna-ganta-2a57b8158/">
                    https://www.linkedin.com/in/palguna-ganta-2a57b8158/
                  </a>
                </ul>
              </div>
            </div>
            <div className="row skill">
              <div className="header-col">
                <h1><span>Skills</span></h1>
              </div>
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                </ul>
              </div>
            </div>
            <div className="row languages">
              <div className="header-col">
                <h1><span>Languages</span></h1>
                <ul>
                  <li>
                    <p>Telugu</p>
                  </li>
                  <li>
                    <p>English</p>
                  </li>
                  <li>
                    <p>Hindi</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row interests">
              <div className="header-col">
                <h1><span>Interests</span></h1>
                <ul>
                  <li>
                    <p>....................</p>
                  </li>
                  <li>
                    <p>...............................</p>
                  </li>
                  <li>
                    <p>.........................</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>



      </section>
    </div>
  );
}


export default Myprofile;
