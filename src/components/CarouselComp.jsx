import caro1 from "../assets/caro1.jpeg";
import caro2 from "../assets/caro2.jpeg";
import caro3 from "../assets/caro3.jpeg";
export default function CarouselComp() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block h-96 w-100" src={caro1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img
              className="d-block h-96 w-100"
              src={caro2}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img className="d-block h-96 w-100" src={caro3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>{" "}
    </div>
  );
}
