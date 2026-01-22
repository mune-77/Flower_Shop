import { Carousel, Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const sliders = [
    {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1580915606060-ade70aceab53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FRESH FLOWER & GIFT SHOP",
    description: "Making beautiful flowers a part of your life.",
  },
  {
    id: 2,
    image:
      "https://t4.ftcdn.net/jpg/14/61/14/05/360_F_1461140561_t4bmx2hcgTJwrKY3lIWY1JMT7CiggJ43.jpg",
    title: "FRESH FLOWER & GIFT SHOP",
    description: "Making beautiful flowers a part of your life.",
  },

];
function Hero() {
  return (
<div>
    <Carousel fade>
      {sliders.map((slider) => (
        <Carousel.Item key={slider.id}>
          <img
            src={slider.image}
            alt={slider.title}
            className="w-100"
            style={{
              objectFit: "cover",
              height: "80vh",
              objectPosition: "top",
            }}
          />
          <Carousel.Caption className="d-flex h-100 align-items-center text-start text-dark">
            <div>
              <motion.p
                className=" fw-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slider.title}
              </motion.p>
              <motion.h2
                style={{ maxWidth: "570px", fontSize: '50PX' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slider.description}
              </motion.h2>
              <motion.button
                className="text-white border-0 rounded-pill px-4 py-2 fw-bold mt-3"
                style={{ backgroundColor: "#f45d96" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                SHOP NOW
              </motion.button>
             
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
          <Container>
      <Row>
        <Col md={3} className="mt-5">
        <div className="card border-0 ">
          <div className="d-flex gap-3">
            <div className="mt-2">
              <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png" alt="" />
            </div>
            <div>
              <h3>100% Freshness</h3>
              <p className='text-muted'>Most people are unaware of the less common flower</p>
            </div>
          </div>
        </div>
        </Col>
          <Col md={3} className="mt-5">
        <div className="card border-0 ">
          <div className="d-flex gap-3">
            <div className="mt-2">
              <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png" alt="" />
            </div>
            <div>
              <h3>Made by artist</h3>
              <p className='text-muted'>Most people are unaware of the less common flower</p>
            </div>
          </div>
        </div>
        </Col>
          <Col md={3} className="mt-5">
        <div className="card border-0 ">
          <div className="d-flex gap-3">
            <div className="mt-2">
              <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png" alt="" />
            </div>
            <div>
              <h3>Own courier</h3>
              <p className='text-muted'>Most people are unaware of the less common flower</p>
            </div>
          </div>
        </div>
        </Col>
          <Col md={3} className="mt-5">
        <div className="card border-0 ">
          <div className="d-flex gap-3">
            <div className="mt-2">
              <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png" alt="" />
            </div>
            <div>
              <h3>100% Freshness</h3>
              <p className='text-muted'>Most people are unaware of the less common flower</p>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col md={3} className="mt-5">
        <div className="position-relative">
          <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg" alt="" className="position-relative img-fluid" />
               <div className="card py-2 px-5 border-0 position-absolute bottom-0 start-0 ms-4 mb-4">
            <h4 className="text-center">Fresh Flower</h4>
            <p className="text-muted text-center">(25 items)</p>
          </div>
        </div>
        </Col>
           <Col md={3} className="mt-5">
        <div className="position-relative">
          <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg" alt="" className="position-relative img-fluid" />
               <div className="card py-2 px-5 border-0 position-absolute bottom-0 start-0 ms-3 mb-4">
            <h4 className="text-center">Succulent plants</h4>
            <p className="text-muted text-center">(162 items)</p>
          </div>
        </div>
        </Col>
           <Col md={3} className="mt-5">
        <div className="position-relative">
          <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg" alt="" className="position-relative img-fluid" />
               <div className="card py-2 px-5 border-0 position-absolute bottom-0 start-0 ms-4 mb-4">
            <h4 className="text-center">Cactus plants</h4>
            <p className="text-muted text-center">(58 items)</p>
          </div>
        </div>
        </Col>
           <Col md={3} className="mt-5">
        <div className="position-relative">
          <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg" alt="" className="position-relative img-fluid" />
               <div className="card py-2 px-5 border-0 position-absolute bottom-0 start-0 ms-4 mb-4">
            <h4 className="text-center">Funiture tree</h4>
            <p className="text-muted text-center">(25 items)</p>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
</div>
    
  );
}
export default Hero;
