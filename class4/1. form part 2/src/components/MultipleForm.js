import React, { useState } from "react";

const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onMobileChangeHandler = (event) => {
    setMobile(event.target.value);
  };

  return (
    <div>
      <h1>
        {name}, {email}, {mobile}
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            onChange={onNameChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={email}
            onChange={onEmailChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Mobile</label>
          <input
            type="text"
            value={mobile}
            onChange={onMobileChangeHandler}
            className="form-control"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Header;
