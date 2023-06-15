import React from "react";

const handleSwitch = (para) => {
  switch (para.isActive) {
    case "user":
      return (
        <>
          <h3>My name is </h3>
          <h1>{para.person.name.first + " " + para.person.name.last}</h1>
        </>
      );

    case "email":
      return (
        <>
          <h3>My email is </h3>
          <h1>{para.person.email}</h1>
        </>
      );

    case "age":
      return (
        <>
          <h3>My age is </h3>
          <h1>{para.person.dob.age}</h1>
        </>
      );

    case "address":
      return (
        <>
          <h3>i live at </h3>
          <h1>
            {para.person.location.street.number +
              " " +
              para.person.location.street.name}
          </h1>
        </>
      );

    case "phone":
      return (
        <>
          <h3>My contact number is </h3>
          <h1>{para.person.phone}</h1>
        </>
      );

    case "password":
      return (
        <>
          <h3>This is my password </h3>
          <h1>{para.person.login.password}</h1>
        </>
      );

    default:
      return;
  }
};

const Card = ({ state, handleHover, handleNoHover, handleRefresh }) => {
  let person = state.person;

  return (
    <section className="card">
      <header className="header">
        <div className="dp flex">
          <img src={person.picture.large} alt={person.name.first} />
        </div>
      </header>

      <div className="details">
        {handleSwitch(state)}
        <div className="icons flex">
          <i
            onMouseLeave={handleNoHover}
            onMouseEnter={() => handleHover("user")}
            className={
              state.isActive === "user"
                ? "fa-solid fa-user active"
                : "fa-solid fa-user "
            }
          ></i>

          <i
            onMouseLeave={handleNoHover}
            onMouseEnter={() => handleHover("email")}
            className="fa-solid fa-envelope-open"
          ></i>

          <i
            onMouseLeave={handleNoHover}
            onMouseEnter={() => handleHover("age")}
            className="fa-solid fa-calendar-xmark"
          ></i>

          <i
            onMouseLeave={handleNoHover}
            onMouseEnter={() => handleHover("address")}
            className="fa-solid fa-map"
          ></i>

          <i
            onMouseLeave={handleNoHover}
            onMouseEnter={() => handleHover("phone")}
            className="fa-solid fa-phone"
          ></i>

          <i
            onMouseLeave={handleNoHover}
            onMouseEnter={() => handleHover("password")}
            className="fa-solid fa-lock"
          ></i>
        </div>
        <button onClick={handleRefresh}>Random Person</button>
      </div>
    </section>
  );
};

export default Card;
