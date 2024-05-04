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

  return (
    <div className="pt-[5%] pl-[5%]">
      <button onClick={getProduct} className="rounded px-5 py-2 bg-red-300">
        Call Product API
      </button>
    </div>
  );
};

export default App;
