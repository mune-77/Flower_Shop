import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Col, Button, Table, Row, Card } from "react-bootstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Cart = () => {
  const { cart, totalPrice, applyCoupon, taxAmount, discount, finalTotal } = useContext(CartContext);
  const [couponInput, setCouponInput] = useState('');
  
  return (
    <div>
      <div className="mt-4 pt-5 position-relative text-center">
        <img
          src="https://preview.colorlib.com/theme/florist/img/breadcrumb-bg.jpg"
          alt=""
          className="img-fluid"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1>Shopping Cart</h1>
          <div className="d-flex gap-3 ms-4 mt-3">
            {" "}
            <Link
              to="/"
              className="text-decoration-none "
              style={{ color: "#f45d96" }}
            >
              Home
            </Link>
            <p className="border-end border-2 border-secondary"></p>
            <p className="">SHOPPING CART</p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {cart.length === 0 ? (
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-lg-6 col-12">
              <img
                src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/shopping/empty-cart-lb2qls3hc10oh95ysepyyf.png/empty-cart-eudzxdt3f49bo2oyjh77m.png?_a=DATAiZAAZAA0"
                alt="Empty Cart"
                className="img-fluid mx-auto d-block"
                style={{ height: "500px" }}
              />
              <h3 className="text-center text-muted mt-2 shado">
                Your Shopping Cart is Empty
              </h3>
              <Link to="/" className="d-block text-center">
                <Button
                  className="mt-4 fw-bold border-0 rounded-pill px-3 shadow"
                  style={{ backgroundColor: "#f45d96" }}
                >
                  Go to Products
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="mt-3">Shopping Cart</h3>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <Table>
                    <thead className="table-light">
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="col-lg-4 col-12">
                        <Card className="border-0 p-2 rounded-0" style={{backgroundColor:'#f7f5ff'}}>
            <Card.Body className="text-muted">
               <p>Enter Coupon code. It will be applied at checkout.</p>
             <div className="input-group">
                <input type="text" className="form-control rounded-0" value={couponInput} onChange={(e) => setCouponInput(e.target.value)} />
               
                <button className="bg-dark text-white btn rounded-0" onClick={() => applyCoupon(couponInput)}>APPLY</button>
                
             </div>
             <p className="mt-3"><span className="fw-bold">Coupon Code:</span> CODE26</p>
            </Card.Body>
        </Card>
        <Card className="mt-5 border-0 rounded-0 p-2" style={{backgroundColor:'#f7f5ff'}}>
          
         <Card.Body className="p-3">
          <h3>Cart Total</h3>
          <div className="d-flex justify-content-between">
            <p className="mt-4 text-muted">Subtotal</p>
            <p className="fw-bold mt-4">${totalPrice.toFixed(2)}</p>
          </div>
           {discount > 0 && (
            <div className="d-flex justify-content-between">
            <p className="text-muted">Discount</p>
            <p className="fw-bold">${discount.toFixed(2)}</p>
          </div>
           )}
            <div className="d-flex justify-content-between">
            <p className="text-muted">Tax (10%)</p>
            <p className="fw-bold">${taxAmount.toFixed(2)}</p>
          </div>
            <div className="d-flex justify-content-between">
            <p className="text-muted">Total</p>
            <p className="fw-bold" style={{color:'#f45d96'}}>${finalTotal.toFixed(2)}</p>
          </div>
         <Link to='/checkout'> <button className="btn bg-dark text-white w-100 mt-3 rounded-0 fw-semibold">PROCEED TO CHECKOUT</button></Link>
         </Card.Body>

        </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
