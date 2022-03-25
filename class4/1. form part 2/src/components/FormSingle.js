import React, { Component } from "react";

class FormSingle extends Component {
  constructor() {
    super();
    this.state = {
      name: "mark",
    };
  }

  onChangeHandler = (event) => {
    //console.log('changed')
    //console.log(event.target.value)
    this.setState({
      name: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        <marquee>Hello...</marquee>
        <h1>{this.state.name}</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.name}
              className="form-control"
            />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default FormSingle;
