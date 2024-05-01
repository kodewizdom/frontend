import { useState } from "react";
import Song from "./components/Song";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      songName: "Tum hi ho",
      artistName: "Arjit Singh",
      image:
        "https://images.unsplash.com/photo-1515010137531-66995c7f40e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
      favourites: false,
      link:"https://youtu.be/Umqb9KENgmk?si=JjnzWS6dayQXundF",
    },
    {
      songName: "Dil Se Re",
      artistName: "A.R. Rahman",
      image:
        "https://images.unsplash.com/photo-1588032786045-59cefda005c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
      favourites: true,
      link:"https://youtu.be/WuXVl0zoSBQ?si=FZAfiCto099iGpCP",
    },

    {
      songName: "Faded",
      artistName: "Alan Walker",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
      favourites: false,
      link:"https://www.youtube.com/watch?v=60ItHLz5WEA",
    },

    {
      songName: "Shape of You",
      artistName: "Ed Sheeran",
      image:
        "https://images.unsplash.com/photo-1598698287642-9ceaf9a7a011?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      favourites: false,
      link:"https://www.youtube.com/watch?v=JGwWNGJdvx8"
    },
    {
      songName: "Haan Tu Hain",
      artistName: "K.K",
      image:
        "https://images.unsplash.com/photo-1602848596140-33c2b48c6ade?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      favourites: false,
      link:"https://www.youtube.com/watch?v=V1fbOsHBlZE",
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    return setSongData((prev) => {
      return prev.map((item, indx) => {
        if (index === indx) {
          return { ...item, favourites: !item.favourites };
        }

        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar songData={songData} />
        <div className="px-20 flex flex-wrap gap-10 mt-10">
          {songData.map((item, index) => (
            <Song
              key={index}
              values={item}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
