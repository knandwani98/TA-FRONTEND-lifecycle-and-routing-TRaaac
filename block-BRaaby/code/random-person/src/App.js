import React, { Component } from "react";
import Card from "./Component/Card";
import Loader from "./Component/Loader";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: null,
    };
  }

  componentDidMount = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((person) => this.setState({ person: person.results[0] }));
  };

  render() {
    if (!this.state.person) {
      return <Loader />;
    }

    console.log(this.state.person);
    return (
      <>
        <div className="black half"></div>
        <div className="card-container flex ">
          <Card person={this.state.person} />
        </div>
        <div className="white half"></div>
      </>
    );
  }
}

export default App;
