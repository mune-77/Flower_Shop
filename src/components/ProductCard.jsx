import { Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { FaSearch, FaRegHeart, FaShoppingBag } from "react-icons/fa";
const ProductCard = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <Card className=" border-0 overflow-hidden mt-5" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={products.image}
        alt={products.name}
        className="img-fluid position-relative"
        style={{ height: "350px", objectFit: "cover" }}
      />
      <div className="d-flex gap-3 opacity-0 position-absolute bottom-50 start-50 translate-middle mb-3 product-btn">
        <Button className="text-dark border-0 bg-white rounded-pill hov-btn">
          <FaSearch />
        </Button>
        <Button
          className="text-dark border-0 bg-white rounded-pill hov-btn"
          onClick={() => addToCart(products)}
        >
          <FaShoppingBag />
        </Button>
        <Button className="text-dark border-0 bg-white rounded-pill hov-btn">
          <FaRegHeart />
        </Button>
      </div>
      <Card.Body>
        <Card.Title className="mt-3 text-center">{products.name}</Card.Title>
        <Card.Text className="mt-2 text-center product-text fw-bold">
          ${products.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
