import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
function Checkout() {
    const {applyCoupon, couponInput, totalPrice, finalTotal, setCouponInput, cart} = useContext(CartContext);
return(
    <div>
         <div className="mt-4 pt-5 position-relative text-center">
        <img
          src="https://preview.colorlib.com/theme/florist/img/breadcrumb-bg.jpg"
          alt=""
          className="img-fluid"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1>Checkout</h1>
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
            <p className="">CHECKOUT</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-lg-8 col-12 mb-5">
                <div className="d-flex justify-content-between">
                    <h3 className='py-3 mt-5'>Contact information</h3>
                    <p className='py-3 mt-5 fs-5'>Already have an account? <Link className='text-decoration-none' style={{ color: "#f45d96" }}>Login</Link></p>
                </div>
               <input type="text" placeholder='Email Or mobile phone number' className='form-control rounded-0 p-2 px-3' />
               <input type="checkbox" className='mt-4' /> <span className='ms-3'>Keep me up to dateon news and exclusive offers</span>
               <h2 className='mt-5'>Shipping address</h2>
               <div className="row">
                <div className="col-lg-6 col-12">
                    <label htmlFor="" className='mt-3 required d-block'>First name</label>
                    <input type="text" className='mt-2 form-control rounded-0' />
                </div>
                <div className="col-lg-6 col-12">
                      <label htmlFor="" className='mt-3 required d-block'>Last name</label>
                    <input type="text" className='mt-2 form-control rounded-0' />
                </div>
               </div>
               <label htmlFor="" className='mt-4  required d-block'>Contact</label>
               <input type="text" className='mt-2 form-control rounded-0' />
                  <label htmlFor="" className='mt-4 required d-block'>Address</label>
               <input type="text" className='mt-2 form-control rounded-0 p-2 px-3' placeholder='Steet address' />
               <input type="text" className='mt-2 form-control rounded-0 p-2 px-3' placeholder='Apartment, suite, unite ect ( optinal )' />
               <label htmlFor="" className='mt-4  required d-block'>Town/City</label>
               <input type="text" className='mt-2 form-control rounded-0' />
               <label htmlFor="" className='mt-4  required d-block'>Country/State</label>
               <input type="text" className='mt-2 form-control rounded-0' />
               <label htmlFor="" className='mt-4  required d-block'>Postcode/Zip</label>
               <input type="text" className='mt-2 form-control rounded-0' />
               <label htmlFor="" className='mt-4  required d-block'>Oder note</label>
               <input type="text" className='mt-2 form-control rounded-0 p-2 px-3' placeholder='Note about your order, e.g, special noe for delivery' />
               <input type="checkbox" className='mt-4 mb-5' /> <span className='ms-3'>Save this infomation for next time</span>
            </div>
            <div className="col-lg-4 col-12 py-3 ">
                <Card className='mt-5 rounded-0 border-0 p-3'style={{backgroundColor:'#f7f5ff'}}>
                     <Card.Body>
                        <div className="d-flex gap-2"><h3>Your order</h3> 
                            <p className='fs-5 mb-0' style={{color:'#c2c2c4', marginTop:'-3px'}}>________________________</p></div>
                        
               <p className='mt-4 text-muted'>Enter Coupon code. It will be applied at checkout.</p>
             <div className="input-group">
                <input type="text" className="form-control rounded-0" value={couponInput} onChange={(e) => setCouponInput(e.target.value)} />
               
                <button className="bg-dark text-white btn rounded-0" onClick={() => applyCoupon(couponInput)}>APPLY</button>
                
             </div>
             <p className="mt-3 text-muted"><span className="fw-bold">Coupon Code:</span> CODE26</p>
           <p className='fs-5 fw-semibold'>Products</p>
{cart && cart.map((product) => (
    <div className="d-flex justify-content-between" key={product.id}>
        <p>{product.quantity}x {product.name}</p>
        <p>{(product.price * product.quantity).toFixed(2)} $</p>
    </div>
))}


<div className="d-flex justify-content-between fw-bold mt-3">
    <p>Total</p>
    <p>{finalTotal.toFixed(2)} $</p>
</div>
            </Card.Body>
                </Card>
            </div>
        </div>
      </div>
    </div>
)
}
export default Checkout;