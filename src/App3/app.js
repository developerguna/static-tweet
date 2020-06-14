import React from 'react';
import ReactDOM from 'react-dom';
import {Profile,Content} from '../ProfileContent/app';

class App3 extends React.Component {
    state = {
        persons: [
            { name: 'palguna', age: 24, id: '100' },
            { name: 'mahesh', age: 26, id: '101' },
            { name: 'rajubaba', age: 24, id: '102' },
            { name: 'ashok', age: 26, id: '103' }
        ],
        showPersons: false
    }
    switchhandler = (item) => {
        //alert("clicked");
        //Dont use this this.state.persons[0].name="Palguna ganta";
        this.setState({
            persons: [
                { name: item, age: 24 },
                { name: 'mahesh budige', age: 26 },
                { name: 'xyz', age: 21 }
            ]
        })
    }
    switchhandler2 = (item) => {
        //alert("clicked");
        //Dont use this this.state.persons[0].name="Palguna ganta";
        this.setState({
            persons: [
                { name: "palguna ganta", age: 24 },
                { name: item, age: 26 },
                { name: 'xyz', age: 21 }
            ]

        })
    }
    switchhandler3 = (event) => {
        this.setState({
            persons: [
                { name: "palguna ganta", age: 24 },
                { name: event.target.value, age: 26 },
                { name: 'xyz', age: 21 }
            ]
        })
    }
    switchhandler4 = (event) => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });

    }
    switchhandlerdelete = (personIndex) => {
        //const personsdata=this.state.persons;
        const personsdata = [...this.state.persons];
        personsdata.splice(personIndex, 1);
        this.setState({ persons: personsdata })
    }
    render() {

        const style1 =
        {
            backgroundColor: "#dddddd",
            border: '2px solid blue',
            padding: '5px'
        }
        const style2 =
        {
            textAlign: 'center',
            margin: 'auto'
        }
        let showper = null;
        if (this.state.showPersons) {
            showper = (
                <div> {this.state.persons.map((data, index) => {
                    return <Profile key={data.id} click={() => this.switchhandlerdelete(index)} name={data.name} age={data.age} />
                    /* <Profile click={this.switchhandler.bind(this,"987654321")} 
                                       name={this.state.persons[0].name} change={this.switchhandler3} 
                                       age={this.state.persons[0].age} />
                                       <Profile click={() => this.switchhandler2("everything changed")} 
                                       change={this.switchhandler3} name={this.state.persons[1].name}  
                                       age={this.state.persons[1].age} />
                                       */

                })}
                </div>
            );

            style2.backgroundColor = "green";
        }

        let classstyle = [];
        if (this.state.persons.length >= 3) {
            classstyle.push("red");
        }
        if (this.state.persons.length >= 2) {
            classstyle.push("bold");
        }
        return (
            <div style={style1}>
                <h1 className={classstyle.join(' ')} style={style2}>Usage of State data </h1>
                <button style={style2} onClick={this.switchhandler4}>Show/Hide</button>
                {showper}
            </div>
        )
    }
}

export default App3;