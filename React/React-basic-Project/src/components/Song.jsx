import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Song = ({ values, handleClick, index }) => {
  const { songName, artistName, image, link, favourites } = values;
  return (
    <div className="w-64 mt-10 bg-zinc-100 relative p-4 rounded-md flex gap-4 pb-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md">
        <img
          className="w-full h-full object-cover overflow-hidden rounded-md"
          src={image}
          alt="song-card"
        />
      </div>
      <div className="">
        <h3 className="text-xl leading-none font-semibold">{songName}</h3>
        <h6 className="text-sm">{artistName}</h6>
        <span>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
          </a>
        </span>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-3 whitespace-nowrap ${
          favourites ? "bg-orange-600" : "bg-teal-600"
        } absolute bottom-[-30%] left-1/2  -translate-y-[50%] -translate-x-[50%] text-white text-xs rounded-full`}
      >
        {favourites ? "Added" : "Add to favourites"}
      </button>
    </div>
  );
};

export default Song;
