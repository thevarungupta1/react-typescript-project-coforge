import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";

const CategoryList = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/category")
      .then((response) => {
        setCategoryData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {categoryData.map((category) => (
          <Category data={category} />
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
