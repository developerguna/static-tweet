import React from "react";
import { Profile } from "../ProfileContent/app";

function App4(props) {
  this.state = {
    persons: [
      { name: "ReactJS", rank: 1, frameworkurl: "https://reactjs.org" },
      { name: "Angular", rank: 2, frameworkurl: "https://angular.io/" },
      { name: "VueJS", rank: 3, frameworkurl: "https://vuejs.org/" },
    ],
    otherState: "new value",
  };
  //this.switchhandler = this.switchhandler.bind(this);
  this.switchhandler = () => {
    const newpersons = [
      { name: "VueJS", rank: 24, frameworkurl: "https://vuejs.org/" },
      { name: "React", rank: 26, frameworkurl: "https://reactjs.org" },
      { name: "Angular", rank: 21, frameworkurl: "https://angular.io/" },
    ];

    this.setState({ persons: newpersons });
  };
}
/* const switchhandler = () => {
    //alert("clicked");
    //Dont use this this.state.persons[0].name="Palguna ganta";
    array2({
        persons: [
            { name: 'cba', age: 24 },
            { name: 'gfe', age: 26 },
            { name: 'dguyduef', age: 21 }
        ]

    });
}; */
App4.prototype.render = function () {
  const { persons } = this.state;
  return (
    <React.Fragment>
      {/* <button onClick={this.switchhandler}>Change State </button> */}
      <div>
        {persons.map((item) => (
          <Profile
            key={item.name}
            name={item.name}
            age={item.rank}
            href={item.frameworkurl}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

Object.setPrototypeOf(App4.prototype, React.Component.prototype);

export default App4;
