import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
const AboutSection = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-12 mt-5">
            <p
              style={{ color: "#f45d96", letterSpacing: "2px" }}
              className="fw-bold"
            >
              ABOUT US
            </p>
            <h1 style={{ maxWidth: "400px" }}>
              We provide all kinds of fresh flower services
            </h1>
          </div>
          <div className="col-lg-8 col-12 mt-5">
            <p className="text-muted fs-5">
              For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
              Canada, growing flowers that can be dried and incorporated into
              late fall and winter floral arrangements has been a game-changer.
              During her growing season, this farmer-florist relies on a vivid
              palette of annuals, perennials and ornamental grasses to supply
              her studio.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12 ">
            <div className="position-relative">
              <img
                src="https://preview.colorlib.com/theme/florist/img/about/about-video.jpg"
                className="img fluid mt-5 "
                alt=""
              />
              <Link
                to="https://youtu.be/fq8f9ZxLaC8"
                className="position-absolute top-50 start-50 translate-middle rounded-pill d-flex justify-content-center align-items-center ms-5 mt-5"
                style={{
                  backgroundColor: "#f45d96",
                  width: "80px",
                  height: "80px",
                }}
              >
                {" "}
                <FaPlay className="fs-3 text-white" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-12 px-4">
            <div className="card shadow border-0 p-5">
              <p
                style={{ color: "#f45d96", letterSpacing: "3px" }}
                className="fw-semibold mt-5"
              >
                Slow Flowers’ Floral Insights
              </p>
              <h1 style={{ letterSpacing: "2px" }}>
                Dried flowers are having a renaissance
              </h1>
              <p className="mt-5 text-muted fs-5">
                This awareness has been stimulated by sustainable sourcing
                practices and the desire on the part of North American flower
                growers to “extend the season” beyond the last frost.
              </p>
             <div className=""> <Link to="/contact">
                <button
                  className="btn text-white rounded-pill fw-semibold mt-3 mb-4 py-2 px-4 shadow-sm"
                  style={{ backgroundColor: "#f45d96" }}
                >
                  CONTACT US
                </button>
              </Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
