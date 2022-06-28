import React from "react";
class FetchRandomuser extends React.Component {
  state = {
    loading: true,
    randomuser: null,
  };
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ randomuser: data.results, loading: false });
  }
  render() {
    const styleuser = {
      border: "1px solid #808080",
      textAlign: "center",
      margin: "auto",
      padding: "15px",
      maxWidth: "600px",
    };
    return (
      
        
      <div style={styleuser} id="fetchuser" className="fetchuser">
        {this.state.loading || !this.state.randomuser ? (
          <div>loading..</div>
        ) : (
          <div>
            {this.state.randomuser.map((data) => {
              return (
                <section key={data.name.first.toString()}>
                  <img alt="profile-pic" src={data.picture.medium} />
                  <div className="border" />
                  <h4>Country : {data.location.country}</h4>
                  <span>
                    Full Name : {data.name.first}
                    {data.name.last}
                  </span>
                  <span>Gender : {data.gender}</span>
                </section>
              );
            })}
          </div>
        )}
      </div>
     
     
    );
  }
}
export default FetchRandomuser;
