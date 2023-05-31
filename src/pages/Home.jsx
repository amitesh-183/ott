import sec from "../assets/sec.jpeg";
import sec2 from "../assets/sec2.jpeg";
import sec3 from "../assets/sec3.jpeg";
import sec4 from "../assets/sec4.jpeg";
import sec5 from "../assets/sec5.jpeg";
import sec6 from "../assets/sec6.jpeg";
import sec7 from "../assets/sec7.jpeg";
import sec8 from "../assets/sec8.jpeg";
import sec9 from "../assets/sec9.jpeg";
import sec10 from "../assets/sec10.jpeg";
import CarouselComp from "../components/CarouselComp";
import Menu from "../components/Menu";
import Sections from "../components/Sections";
import SideNav from "../components/SideNav";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <div className=" ml-52">
      <SideNav />
      <CarouselComp />
      <div className="block mt-20">
        <Menu />
      </div>
      <Heading heading={"Recommended for you"} />
      <div className="flex gap-16 px-6">
        <Sections url={sec} />
        <Sections url={sec2} />
        <Sections url={sec3} />
        <Sections url={sec4} />
        <Sections url={sec4} />
      </div>
      <Heading heading={"Animated Adventures"} />
      <div className="flex gap-16 px-6">
        <Sections url={sec5} />
        <Sections url={sec6} />
        <Sections url={sec7} />
        <Sections url={sec8} />
        <Sections url={sec9} />
      </div>
      <Heading heading={"Action Thriller"} />
      <div className="flex gap-16 px-6">
        <Sections url={sec10} />
        <Sections url={sec2} />
        <Sections url={sec3} />
        <Sections url={sec4} />
        <Sections url={sec4} />
      </div>
      <Heading heading={"Romance"} />
      <div className="flex gap-16 px-6">
        <Sections url={sec} />
        <Sections url={sec2} />
        <Sections url={sec3} />
        <Sections url={sec4} />
        <Sections url={sec4} />
      </div>
    </div>
  );
}
