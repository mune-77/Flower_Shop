import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
const ProductList = ({ products }) => {
    return(
        <Row>
            {products.map((product) => (
                <Col key={product.id}>
                    <ProductCard products={product} />
                </Col>
            ))}
        </Row>
    );
};
export default ProductList;