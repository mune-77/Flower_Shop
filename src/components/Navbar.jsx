import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Badge,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { FaSearch, FaRegHeart, FaShoppingBag } from "react-icons/fa";


const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const {searchtrim, searchTerm} = useContext(CartContext);
  const search = () => {
    setShowSearch(!showSearch);
  }
  const { totalItems } = useContext(CartContext);
  return (
    <BootstrapNavbar expand="lg" className="fixed-top shadow-sm bg-light py-3">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/">
          <img
            src="https://preview.colorlib.com/theme/florist/img/logo.png"
            alt=""
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-dark"
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center ms-auto gap-3">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              style={{ fontSize: "18px" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              style={{ fontSize: "18px" }}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/services"
              style={{ fontSize: "18px" }}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/shop"
              style={{ fontSize: "18px" }}
            >
              SHOP
            </Nav.Link>
            <NavDropdown
              className="text-decoration-none"
              style={{ fontSize: "18px" }}
              title="PAGES"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                className="bg-dark text-white"
                as={NavLink}
                to="/cart"
              >
                Cart
              </NavDropdown.Item>
              <NavDropdown.Item
                className="bg-dark text-white"
                as={NavLink}
                to="/checkout"
              >
                Checkout
              </NavDropdown.Item>
              <NavDropdown.Item
                className="bg-dark text-white"
                as={NavLink}
                to="/portfolio"
              >
                Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item
                className="bg-dark text-white"
                as={NavLink}
                to="/shopDetails"
              >
                Shop Details
              </NavDropdown.Item>
              <NavDropdown.Item
                className="bg-dark text-white"
                as={NavLink}
                to="/blogDetails"
              >
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={NavLink}
              to="/blog"
              style={{ fontSize: "18px" }}
            >
              BLOG
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              style={{ fontSize: "18px" }}
            >
              CONTACT
            </Nav.Link>
            <div className="d-flex ms-5 ps-5">
              <Nav.Link className="text-dark fs-4 ps-5" onClick={search}>
                <FaSearch />
              </Nav.Link>
               {showSearch && (
                <Form className="ms-2">
                  <FormControl 
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-pill mt-2"
                  aria-label="Search"
                  onChange={(e) => searchtrim(e.target.value)}
                  value={searchTerm}
                  autoFocus
                  
                  />
                </Form>
              )}
              <Nav.Link className="text-dark fs-4 ps-5">
                <FaRegHeart />
              </Nav.Link>
             
              <Nav.Link className="text-dark fs-4 ps-5 " as={Link} to='/cart'>
                <FaShoppingBag />
                {totalItems > 0 && (
                  <Badge pill bg="danger" className="top-0 start-100 translate-middle rounded-pill"
                  style={{fontSize: '0.8rem'}}
                  >{totalItems}</Badge>
                )}
              </Nav.Link>
            </div>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
export default Navbar;
