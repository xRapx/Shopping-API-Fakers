import React from "react";
import { useEffect, useState } from "react";
import productAPI from "./services/productAPI";

const Test = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productAPI.getAll();

        setProductList(response);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchProductList();
  }, []);
  return (
    <div>
      {productList.map((item, i) => {
        return (
          <div key={i}>
            <li>{item.avatar}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
