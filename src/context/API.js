import React from 'react';
import {useEffect ,useState } from "react"


const API = () => {
  const [product, setProduct] = useState([]);

  useEffect(() =>   {
    async function fetchData() {    
      try {   
        let data = [];
        const requestURL =
          "data.json";
        const response = await fetch(requestURL);
        const responseJSON = await response.json();

        data = responseJSON;
        setProduct(data);

      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);
  return(
    <div>hello</div>
  )
}

