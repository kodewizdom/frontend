import React from "react";
import { useState } from "react";

const State5 = () => {
  // const [val,setVal]= useState([1,2,3,4]);

  const [val, setVal] = useState([
    { name: "harsh", age: 24 },
    { name: "sk", age: 23 },
    { name: "kohli", age: 30 },
  ]);
  return (
    <div className="p-20">
      {/* {val.map(item=><h1>{item}</h1>)}
        <button onClick={()=>setVal([...val,7])} className={`px-2 py-2 text-xs mt-2 rounded-full bg-green-500 text-white`}>click</button> */}

      {val.map((item) => (
        <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
        </div>
      ))}
      <button
        onClick={() => setVal(()=>val.map(item=> item.name ==="kohli"? ({name:"kohli", age:26}) : item))}
        className={`px-2 py-2 text-xs mt-2 rounded-full bg-green-500 text-white`}
      >
        click
      </button>
    </div>
  );
};

export default State5;
