import React from 'react';
import { Link } from 'react-router-dom'

const Product = (props) => {
    const { productName, image, description, _id } = props.data
    return(
        <div className="col-sm-3">
          <div className="card">
          <img src={  'http://rjtmobile.com/grocery/images/' + image } className="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">{ productName }</h5>
              <p className="card-text">
               { description }
              </p >
              <Link to={ `/products/${_id}` } className="btn btn-primary btn-block">
                Select
              </Link>
            </div>
          </div>
        </div>
    )
}
export default Product;