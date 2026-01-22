import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, ListGroup, Form, Row, Col, Table } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);
  return (
    
        <tr>
            <td>
                <div className="d-flex gap-3">
                    <div>  <img src={item.image} alt={item.name} className='rounded' style={{
                    width:'60px', height:'60px', objectFit:'cover'
                }} /></div>
                <div>
                    <h5>{item.name}</h5>
                    <p>$ {item.price}</p>
                </div>
                </div>
            </td>
            <td><div className="d-flex mt-3">
                <button className="btn border-0" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="btn border-0 fw-bold">{item.quantity}</button>
                <button className="btn border-0" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                </div></td>
            <td><p className="mt-4">{(item.price * item.quantity).toFixed(2)}</p></td>
            <td><button className="text-white d-flex align-items-center justify-content-center border-0 mt-4 " style={{backgroundColor:'#f45d96', width:'20px', height:'20px', borderRadius:'50%'}} onClick={() => removeFromCart(item.id)}><FaTimes /></button></td>
        </tr>
   
    
  );
};
export default CartItem;
