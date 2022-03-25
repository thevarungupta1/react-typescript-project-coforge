import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Endpoints from "../../api/Enpoints";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event: any) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    axios
      .post(Endpoints.LOGIN_URL, user)
      .then((response) => console.log(response.data.message))
      .catch((error) => console.log(error));
  };

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          <h2>Login</h2>
          <hr />
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-primary btn-block"
            />
          </form>
          <br />
          <a href="/">Already Registerd ? Click Here</a>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default LoginPage;
