import React, { Component } from "react";
import Loader from "./Component/Loader";
import Card from "./Component/Card";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: "user",
      person: null,
    };
  }

  handleHover = (state) => {
    this.setState({
      isActive: state,
    });
  };

  handleNoHover = () => {
    this.setState({
      isActive: "user",
    });
  };

  handleRefresh = () => {
    window.location.reload(true);
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          person: data.results[0],
        });
      });
  }

  render() {
    if (!this.state.person) {
      return <Loader />;
    }

    return (
      <>
        <div className="black half"></div>
        <div className="card-container flex ">
          <Card
            state={this.state}
            handleRefresh={this.handleRefresh}
            handleHover={this.handleHover}
            handleNoHover={this.handleNoHover}
          />
        </div>
        <div className="white half"></div>
      </>
    );
  }
}

export default App;
