/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "./components/Card";
import Song from "./components/Song";
import State from "./components/State";
import State1 from "./components/State1";
import State2 from "./components/State2";
import State3 from "./components/State3";
import State4 from "./components/State4";
import State5 from "./components/State5";
import DiffCard from "./components/DiffCard";
import PassData from "./passingData/PassData";
import Form from "./formHandling/Form";
import Form1 from "./formHandling/Form1";
import Form2 from "./formHandling/Form2";

function App() {
  //!---------------- passing data ------------ */

  // const raw = [
  //   {
  //     name: "Amit",
  //     profession: "Painter",
  //     image:
  //       "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  //   {
  //     name: "Harsh",
  //     profession: "Thalua",
  //     image:
  //       "https://images.unsplash.com/photo-1500214678997-a6adba416e7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: true,
  //   },
  //   {
  //     name: "king",
  //     profession: "Developer",
  //     image:
  //       "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  // ];

  // const [data, setData] = useState(raw);

  // const handleFriendsBtn = (index) => {
  //   setData((prev) => {
  //     return prev.map((item, ind) => {
  //       if (ind === index) {
  //         return { ...item, friends: !item.friends };
  //       }
  //       return item;
  //     });
  //   });
  // };

  return (
    <>
      {/* <Card/> */}
      {/* <Song/> */}
      {/* <State/> */}
      {/* <State1/> */}
      {/* <State2/> */}
      {/* <State3/> */}
      {/* <State4/> */}
      {/* <State5/> */}
      {/* <DiffCard/> */}

      {/*!!!---------------- passing data ------------ */}

      {/* <div className="w-full h-screen flex gap-4 items-center justify-center bg-zinc-300">
        {data.map((item, index) => (
          <PassData 
            key={index} 
            values={item}
            handleFriendsBtn={handleFriendsBtn}
            index={index}
            //image={item.image} 
            //name={item.name} 
            //profession={item.profession} 
          />
        ))}
      </div> */}

      {/*!!!---------------- form Handling ------------ */}
      
      {/* <Form/> */}
      {/* <Form1/> */}
      <Form2/>

    </>
  );
}

export default App;
