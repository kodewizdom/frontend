// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function PassData({values, handleFriendsBtn, index}){
  // eslint-disable-next-line react/prop-types
  const { name, image, profession, friends } = values;

  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-40 bg-sky-200">
        <img 
        className="w-full h-full object-[center_top] object-cover" 
        src={image} 
        alt="image"/>
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button
          onClick={() => handleFriendsBtn(index)}
          className={`px-3 mt-4 py-1 text-sm text-white ${
            friends ? "bg-green-600" : "bg-blue-500"
          } font-semibold rounded-md`}
        >
          {friends ? "Add Friend" : "Friend"}
         
        </button>
      </div>
    </div>
  );
}

export default PassData;
