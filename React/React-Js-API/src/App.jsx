import axios from "axios";

const App = () => {
  const getProduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        console.log(products);
      })
      .catch((err) => console.log(err));
  };
  const addProduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api,{
        title:"new pro",
        price:99,
        description:"added by me",
        image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        category:"car",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-[5%] pl-[5%]">
      <button onClick={getProduct} className="rounded px-5 py-2 bg-red-300">
        Call Product API
      </button>

      <br/><br/>
      <button onClick={addProduct} className="rounded px-5 py-2 bg-blue-300">
        Save New Product
      </button>

    </div>
  );
};

export default App;
