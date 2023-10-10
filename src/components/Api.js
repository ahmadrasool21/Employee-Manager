import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Api() {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState("");

  //   const getdata = async () => {
  //     try {
  //       console.log("this is useEffect for fakeapi");
  //       const res = await axios.get("https://fakestoreapi.com/products");
  //       setdata(res.data);
  //       console.log(res.data);
  //     } catch (error) {
  //       seterror(error.message);
  //     }
  //   };

  //   const getsingle = async () => {
  //     try {
  //       console.log("this is useEffect for fakeapi");
  //       const res = await axios.get(
  //         "https://fakestoreapi.com/products/category/electronics"
  //       );
  //       console.log(res.data);
  //       //   setdata(res.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   const getdata = async () => {
  //     try {
  //       console.log("this is useEffect");
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //       setdata(res.data);
  //     } catch (error) {
  //       seterror(error.message);
  //     }
  //   };

  //   useEffect(() => {
  //     console.log("this is useEffect");
  //     axios
  //       .get("https://jsonplaceholders.typicode.com/posts")
  //       .then((res) => setdata(res.data))
  //       .catch((error) => console.log(error));
  //   }, []);
  useEffect(() => {
    // getdata();
  }, []);
  return (
    <>
      <div>
        <h1>Data fetch with Axiuos</h1>
        {error && <h3>{error}</h3>}
        {data.map((post) => {
          const { price, id, title, description, category } = post;
          return (
            <div className="card" key={id}>
              <h3>title is:{title}</h3>
              <h4>index is:{id}</h4>
              <p>
                <strong>category:</strong>
                {category}
              </p>

              <p>
                <strong>description:</strong>
                {description}
              </p>
              <p>
                <strong>price:</strong>
                {price}
              </p>
            </div>
          );
        })}
      </div>
      ;
    </>
  );
}
