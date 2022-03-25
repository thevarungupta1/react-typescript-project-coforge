import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Enpoints";
import Product from "./Product";
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { catId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(Endpoints.PRODUCT_BY_CAT_ID_URL + catId)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-center">All Products</h2>
      <div className="row">
      {
          products.map(product => <Product data={ product } />)
      }

      </div>
    </div>
  );
};
export default ProductList;
