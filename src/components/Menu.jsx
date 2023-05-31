import menu from "../assets/menu.png";
import menu2 from "../assets/menu2.jpeg";
import menu3 from "../assets/menu3.jpeg";
import menu4 from "../assets/menu4.jpeg";
import menu5 from "../assets/menu5.jpeg";

export default function Menu() {
  return (
    <div className="flex gap-20 py-6 px-6">
      <div className=" cursor-pointer">
        <img className="h-28 w-44 rounded-lg" src={menu} alt="menu" />
      </div>
      <div className=" cursor-pointer">
        <img className="h-28 w-44 rounded-lg" src={menu2} alt="menu" />
      </div>
      <div className=" cursor-pointer">
        <img className="h-28 w-44 rounded-lg" src={menu3} alt="menu" />
      </div>
      <div className=" cursor-pointer">
        <img className="h-28 w-44 rounded-lg" src={menu4} alt="menu" />
      </div>
      <div className=" cursor-pointer">
        <img className="h-28 w-44 rounded-lg" src={menu5} alt="menu" />
      </div>
    </div>
  );
}
