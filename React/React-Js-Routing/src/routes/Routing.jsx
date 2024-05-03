import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    //From here we will able to change page components on click of navbar
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default Routing;
