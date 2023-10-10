import React from "react";
import axios from "axios";

export default function () {
  const AddProduct = () => {
    // const axios = require("axios");
    axios
      .post("https://fakestoreapi.com/products", {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronics",
      })
      .then(function (response) {
        console.log("Response:", response.data);
      })
      .catch(function (error) {
        console.error("Error:", error.message);
      });
  };

  const UpdateProduct = () => {
    axios
      .put("https://fakestoreapi.com/products/9", {
        title: "test product",
        price: 166.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronics",
      })
      .then(function (response) {
        console.log("Response:", response.data);
      })
      .catch(function (error) {
        console.error("Error:", error.message);
      });
  };

  const DeleteProduct = () => {
    axios
      .delete("https://fakestoreapi.com/products/9")
      .then(function (response) {
        console.log("Response:", response.data);
      })
      .catch(function (error) {
        console.error("Error:", error.message);
      });
  };

  return (
    <div>
      post data
      <button onClick={AddProduct}>Add product</button>
      <button onClick={UpdateProduct}>Update-Product</button>
      <button onClick={DeleteProduct}>Delete-Product</button>
    </div>
  );
}
