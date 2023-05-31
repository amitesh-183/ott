import logo from "../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 bg-white container flex justify-between px-4 border border-b">
      <div>
        <img className="h-20" src={logo} alt="" />
      </div>
      <div className="flex gap-4 items-center">
        <ul className="flex gap-6 font-semibold">
          <li className=" cursor-pointer hover:text-green-700">Home</li>
          <li className=" cursor-pointer hover:text-green-700">Shows</li>
          <li className=" cursor-pointer hover:text-green-700">Movies</li>
          <li className=" cursor-pointer hover:text-green-700">Comedy</li>
          <li className=" cursor-pointer hover:text-green-700">News</li>
        </ul>
        <div className=" flex items-center px-4 py-2 my-auto mx-6 rounded-full border">
          <input placeholder="search" type="search" className=" outline-none" />
          <AiOutlineSearch />
        </div>
        <button className="px-6 bg-green-500 hover:bg-green-400 py-2 rounded text-white font-semibold">
          Subscription
        </button>
        <button className="px-6 bg-green-500 hover:bg-green-400 py-2 rounded text-white font-semibold">
          Login
        </button>
      </div>
    </div>
  );
}
