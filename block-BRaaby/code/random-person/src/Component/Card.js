import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render({ person }) {
    return (
      <section className="card">
        <header className="header">
          <div className="dp flex">
            <img
              src="https://180dc.org/wp-content/uploads/2017/08/Akash-Kumar-Passport-Size-Photo-247x300.jpg"
              alt=""
            />
          </div>
        </header>
        <div className="details">
          <h3>My name is </h3>
          <h1>{person.name.first + " " + person.name.last}</h1>
          <div className="icons flex">
            <i className="fa-solid fa-user"></i>

            <i className="fa-solid fa-envelope-open"></i>

            <i className="fa-solid fa-calendar-xmark"></i>

            <i className="fa-solid fa-map"></i>

            <i className="fa-solid fa-phone"></i>

            <i className="fa-solid fa-lock"></i>
          </div>
          <button>Random Person</button>
        </div>
      </section>
    );
  }
}

export default Card;
