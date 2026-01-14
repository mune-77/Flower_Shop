import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  const images = [
    {
      id: 1,
      image:
        "https://preview.colorlib.com/theme/florist/img/instagram/insta-1.jpg",
    },
    {
      id: 2,
      image:
        "https://preview.colorlib.com/theme/florist/img/instagram/insta-2.jpg",
    },
    {
      id: 3,
      image:
        "https://preview.colorlib.com/theme/florist/img/instagram/insta-3.jpg",
    },
    {
      id: 4,
      image:
        "https://preview.colorlib.com/theme/florist/img/instagram/insta-4.jpg",
    },
    {
      id: 5,
      image:
        "https://preview.colorlib.com/theme/florist/img/instagram/insta-5.jpg",
    },
  ];
  return (
    <div>
        <div className="container-fluid">
      <div className="d-flex mt-4 gap-3 overflow-hidden flex-nowrap ">
        {images.map((image) => (
          <div className="position-relative img-container" key={image.id}>
            <img
              src={image.image}
              style={{
                objectFit: "cover",
                minWidth: "150px",
                flex: "1",
                width: "100%",
              }}
            />
            <div className="card border-0 position-absolute top-50 start-50 translate-middle py-3 px-5 w-75 rounded-3 opacity-0 img-card">
              <FaInstagram className="text-danger fs-4 w-100 text-center mb-2" />
              <p className="text-dark text-center">
                Follow us{" "}
                <Link to="/" className="text-dark">
                  @florist
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div> 
    <div className="container mt-4">
        <div className="row">
            <div className="col-lg-3 col-12">
                <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
            </div>
            <div className="col-lg-6 col-12">
                <p className="text-muted">
                    The floristry business has a significant market in the corporate and social event world, as flowers
                </p>
            </div>
            <div className="col-lg-3 col-12">
                    <FaFacebookF className="ms-3" />
                    <FaTwitter className="ms-3" />
                    <FaInstagram  className="ms-3"/>
                    <FaLinkedinIn className="ms-3" />
            </div>
        </div>
        <hr />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-12">
                <div className="row">
                    <div className="col-lg-6">
                        <h4 className="mt-4">Company</h4>
                        <ul className="list-unstyled text-muted">
                            <li>About Us</li>
                            <li>Servcies</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                            <h4 className="mt-4">Account</h4>
                        <ul className="list-unstyled text-muted">
                            <li>My Cart</li>
                            <li>Wisslist</li>
                            <li>Login/Register</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12 border-start">
                <h4 className="mt-4 mx-5">Newletter</h4>
                <p className="text-muted mx-5 mt-3">Subcribe to our newsletter to get more free tips. No Spam, Promise.</p>
                <div className="input-group">
                    <input type="text" className="form-control ms-5 border-0 border-bottom border-3 border-dark rounded-0" placeholder="Email" />
                    <button className="fw-semibold border-0 bg-transparent border-bottom me-5 border-3 rounded-0 border-dark" type="submit">SUBSCRIBE</button>
                </div>
            </div>
            <div className="col-lg-4 col-12 border-start">
                <h4 className="mt-4 mx-5">Get in touch</h4>
                <p className="text-muted mt-3 mx-5">69 North Cleveland Street, Memphis,USA. (123) 8111 9210 - (012) 1111 6868 Florisr@supportthem.com</p>
            </div>
        </div>
        <hr className="mt-5" />
    </div>
    <div>
        <p className="mt-4 text-center">Copyright &copy; 2026 All rights reserved | This template is made with ❤️ by <Link to='/' className="text-decoration-none" style={{color:'#f45d96'}}>Colorlib</Link></p>
    </div>
    
    </div>
  );
}
export default Footer;
