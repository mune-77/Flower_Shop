import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
const sliders = [
  {
    id: 1,
    image:
      "https://t4.ftcdn.net/jpg/14/61/14/05/360_F_1461140561_t4bmx2hcgTJwrKY3lIWY1JMT7CiggJ43.jpg",
    title: "FRESH FLOWER & GIFT SHOP",
    description: "Making beautiful flowers a part of your life.",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1580915606060-ade70aceab53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FRESH FLOWER & GIFT SHOP",
    description: "Making beautiful flowers a part of your life.",
  },
];
function Hero() {
  return (
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
  );
}
export default Hero;
