import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(0);
  useEffect(() => {
    let result = data.filter((item) => item.id == id);
    setDetails(result);
  }, [id]);

  console.log(details);
  return (
    <div>
      {/* {details.map((item) => (
        <div>{item.short_name}</div>
      ))} */}
      {/* {details.map((item) => {
        return <div>{item.short_name}</div>;
      })} */}
    </div>
  );
};

export default ProductDetails;
