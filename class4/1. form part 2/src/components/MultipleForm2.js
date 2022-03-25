import React, { useState } from "react";

const Header = () => {
  const [user, setUser] = useState({
      name: '',
      email: '',
      mobile: ''
  })
 
  const onChangeHandler = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setUser({...user,
            [event.target.name]: event.target.value
        })
  }

  return (
    <div>
      <h1>
        {user.name}, {user.email}, {user.mobile}
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
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
          <label htmlFor="">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Header;
