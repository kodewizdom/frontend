import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import { Route, Routes } from "react-router-dom";
import UserDetail from "../components/UserDetail";

const Routing = () => {
  return (
    //From here we will able to change page components on click of navbar
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/:name" element={<UserDetail />} />
    </Routes>
  );
};

export default Routing;
