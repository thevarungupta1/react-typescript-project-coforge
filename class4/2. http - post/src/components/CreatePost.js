import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [post, setPost] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const onChangeHandler = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>{}</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="">UserId</label>
          <input
            type="text"
            name="userId"
            value={post.userId}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Body</label>
          <input
            type="text"
            name="body"
            value={post.body}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default CreatePost;
