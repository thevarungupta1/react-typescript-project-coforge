import React from "react";

const Photo = (props) => {
  const { title, thumbnailUrl } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={thumbnailUrl} class="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};
export default Photo;
