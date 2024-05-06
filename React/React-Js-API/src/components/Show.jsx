import axios from "../utils/api";
import React, { useEffect, useState } from "react";

const Show = () => {
  const [products, setProducts] = useState([]);

  const getProduct = () => {
    // const api = "https://fakestoreapi.com/products";

    axios
      .get("/products")
      .then((products) => {
        // console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    getProduct();
  },[])
  return (
    <>
      {/* <button onClick={getProduct} className="rounded px-5 py-2 bg-red-300">
        Call Product API
      </button> */}
      
      <ul className="flex flex-wrap gap-3 pt-10">
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className=" rounded-md w-1/4 p-5 bg-red-400">{p.title}</li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
