import { MdGTranslate } from "react-icons/md";
import { MdOutlineWifiTethering } from "react-icons/md";
import { MdViewAgenda } from "react-icons/md";
export default function SideNav() {
  return (
    <div>
      <aside className=" bg-white h-screen flex py-4 fixed left-0 top-20 z-0 border border-r">
        <ul className="flex flex-col gap-4 text-xl font-semibold">
          <li className="flex items-center gap-2 hover:bg-slate-200 px-10 py-4">
            <MdOutlineWifiTethering />
            Channels
          </li>
          <li className="flex items-center gap-2 hover:bg-slate-200 px-10 py-4">
            <MdGTranslate />
            Languages
          </li>
          <li className="flex items-center gap-2 hover:bg-slate-200 px-10 py-4">
            <MdViewAgenda />
            Genres
          </li>
        </ul>
      </aside>
    </div>
  );
}
