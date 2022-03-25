import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Enpoints";
import { useParams } from 'react-router-dom';

const SubCategory = () => {
  const {catId} = useParams()
  const [subCategoryData, setSubCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get(Endpoints.SUBCATEGORY_URL + catId)
      .then((response) => setSubCategoryData(response.data.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <ul className="list-group">
        {subCategoryData.map((item: any) => (
          <li className="list-group-item">{item.subName}</li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategory;
