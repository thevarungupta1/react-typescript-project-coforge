import * as React from "react";
import { Constants } from "../../../api/Contants";

const Product = (props: any) => {
  const { productName, unit, price, mrp, image } = props.data;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img src={Constants.IMAGE_URL + image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">{productName}</p>
          <h2>
            {price}{" "}
            <span>
              <del>{mrp}</del>
            </span>
          </h2>
          <a href="#" className="btn btn-primary btn-block">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default Product;
