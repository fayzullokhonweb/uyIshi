import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/userSlice";

function Navbar() {
  let { user } = useSelector((state) => state.user);
  let dispetch = useDispatch();
  console.log(user);
  return (
    <header className="bg-base-200">
      <nav className="align-element navbar  mx-auto">
        <div className="navbar-start">
          <h1>Navbar</h1>
        </div>
        <div className="navbar-center">{/*Navbar*/}</div>
        <div className="navbar-end">
          <button
            onClick={() => {
              dispetch(logout(user));
            }}
            className="px-4 py-2  text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
