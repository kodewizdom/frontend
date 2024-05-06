import axios from "../utils/api";
import React, { useEffect, useState } from "react";

const Services = () => {
  // const [first, setFirst] = useState("This is normal data");
  // const [second, setSecond] = useState("This is very Large Data");
  // useEffect(() => {
  //   console.log("Services component is Created");

  //   return () => {
  //     console.log("Services component is Deleted");
  //   };
  // },[second]);

  const getUsers = () => {
    // const api = "https://fakestoreapi.com/users";

    axios
      .get("/users")
      .then((users) => {
        console.log(users);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getUsers();

    return () => {
      console.log("Destroy Service Component");
    };
  }, []);

  

  return (
    <div>
      <h1>Services</h1>

      {/* <h3>{first}</h3>
      <h4>{second}</h4>
      <button
        onClick={() => setFirst("change first data")}
        className="px-3 py-1 rounded-sm text-white bg-sky-600 mt-10"
      >
        Change first data
      </button>
      <button
        onClick={() => setSecond("change second data")}
        className="px-3 py-1 mx-4 rounded-sm text-white bg-orange-600 mt-10"
      >
        Change second data
      </button> */}
    </div>
  );
};

export default Services;
