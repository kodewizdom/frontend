// eslint-disable-next-line no-unused-vars
import React from 'react';

function Card() {
    const data = [
        { image: 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D', name: "Amazon", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj", instock:true },
        { image: 'https://images.unsplash.com/photo-1654573817889-296cad084c97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxpcGthcnR8ZW58MHx8MHx8fDA%3D', name: "Flipkart", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj", instock:false },
        { image: 'https://images.unsplash.com/photo-1653389527532-884074ac1c65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8em9tYXRvfGVufDB8fDB8fHww', name: "Zomato", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj", instock:true },
        { image: 'https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFwcCUyMGxvZ298ZW58MHx8MHx8fDA%3D', name: "Tesla", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj", instock:true },
        { image: 'https://images.unsplash.com/photo-1654573821634-e4c84c9a1263?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGFwcCUyMGxvZ298ZW58MHx8MHx8fDA%3D', name: "Unsplash", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj " },
        { image: 'https://images.unsplash.com/photo-1690138871287-02b2fc3b87c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFwcCUyMGxvZ298ZW58MHx8MHx8fDA%3D', name: "Twitter", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj " },
        // { image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwcCUyMGxvZ298ZW58MHx8MHx8fDA%3D', name: "Linkedin", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj " },
        // { image: 'https://images.unsplash.com/photo-1683007002429-deabf420bbe5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFwcCUyMGxvZ298ZW58MHx8MHx8fDA%3D', name: "Zoom", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj " },
        // { image: 'https://images.unsplash.com/photo-1648805777291-a1c45cc26f26?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGFwcCUyMGxvZ298ZW58MHx8MHx8fDA%3D', name: "Notion", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj " },
        // { image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGFwcCUyMGxvZ298ZW58MHx8MHx8fDA%3D', name: "Spotify", description: "lorem ipsum, fafem nfai najn njaffn nfewib dfj " },
    ];

    return (
        <div className=' w-full min-h-screen bg-zinc-400 justify-center flex items-center gap-10 flex-wrap '>
            {data.map((elem, index) => {
                return (
                    <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
                        <div className=' w-full h-32 bg-zinc-300'>
                            <img className='w-full h-full object-cover' src={elem.image} alt='' />
                        </div>
                        <div className='w-full py-4 px-3'>
                            <h2 className='font-medium text-slate-900'>{elem.name}</h2>
                            <p className='text-xs mt-3'>{elem.description}</p>
                            <button className={`px-3 py-1 text-xs mt-3 ${elem.instock ? 'bg-blue-500':'bg-red-500'} rounded-md text-zinc-100`}>
                            {elem.instock ?  "In Stock" : "Out of stock"}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
