import { Link, Outlet } from "react-router-dom";

const User = () => {
  // const navigate = useNavigate();

  // const back = () => {
  //   navigate("/");
  //   // console.log("hey");
  // };
  return (
    <div className=" w-1/2 m-auto mt-10">
      <h3 className="text-5xl">User</h3>
      <div className="flex w-1/2 flex-col mt-5">
        <Link
          className="p-3 bg-red-200 hover:bg-red-400 text-2xl mb-3"
          to="/user/john"
        >
          John
        </Link>

        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400"
          to="/user/ayush"
        >
          Ayush
        </Link>

        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400"
          to="/user/khan"
        >
          khan
        </Link>
      </div>

      <hr/>
      <hr/>
      <Outlet/>
    </div>
  );
};

export default User;
