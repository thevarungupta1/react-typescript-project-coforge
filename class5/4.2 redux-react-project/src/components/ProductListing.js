import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from  '../redux-module/actions/product-action';

const ProductListing = () => {
//   const [products, setProducts] = useState([]);
const products = useSelector((state) => state.allProducts.products)
const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/products")
      .then(response => {
          console.log(response.data.data)
        //   setProducts(response.data.data);
        dispatch(setProducts(response.data.data))
      })
      .catch((error) => console.log(error));
    
  };

  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <div className="row">
        {
            products.map(product => <Product data={product} />)
        }
      </div>
    </div>
  );
};
export default ProductListing;
