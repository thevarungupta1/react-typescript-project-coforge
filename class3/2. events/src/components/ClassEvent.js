import React, { Component } from "react";

class ClassEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mark",
    };
    //this.onClickHandler = this.onClickHandler.bind(this);
  }

//   onClickHandler() {
//     console.log(this);
//     this.setState({
//       name: "Paul",
//     });
//   }

  onClickHandler = () =>  {
    console.log(this);
    this.setState({
      name: "Paul",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* 1st Option */}
        {/* <button onClick={ this.onClickHandler.bind(this) }>Update</button> */}

        {/* 2nd Option */}
        {/* <button onClick={this.onClickHandler}>Update</button> */}

        {/* 3rd Option */}
        {/* <button onClick={ () => this.onClickHandler() }>Update</button> */}

        {/* 4th Option */}
        <button onClick={this.onClickHandler}>Update</button>
      </div>
    );
  }
}

export default ClassEvent;
