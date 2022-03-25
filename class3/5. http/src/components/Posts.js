import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  //   onClickHandler = () => {
  //       this.getData()
  //   }

  getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">All Posts</h1>
        {/* <button className="btn btn-primary" onClick={this.onClickHandler}>Get Data</button> */}
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Posts;
