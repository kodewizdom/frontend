import React, { useState } from "react";

const Form1 = () => {
  const [val, setVal] = useState({ name: "", email: "" });
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(val);
  };
  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <input
          onChange={(event) => setVal({ ...val, name: event.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(event) => setVal({ ...val, email: event.target.value })}
          type="email"
          placeholder="email"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form1;
