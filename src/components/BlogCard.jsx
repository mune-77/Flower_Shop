import { Col, Card } from 'react-bootstrap';

const BlogCard = ({ post }) => {
    return(    
                     <Col md={4} key={post.id}>
                    <Card className='shadow border-0 rounded-0 h-100 cart'>
                        <div className='position-relative'>
                            <img src={post.image} className='img-fluid' alt="" />
                            <p className='position-absolute top-100 start-50 translate-middle bg-dark text-white rounded-0 px-3 py-1 fw-bold card-name'>{post.name}</p>
                        </div>
                        <Card.Body className='p-4 text-center mt-3'>
                           <h5 className='fw-bold card-title'>{post.title}</h5>
                           <p className='text-muted mt-2'>{post.text}</p>
                           <p className='fw-semibold text-muted small'>{post.date}</p>
                        </Card.Body>
                    </Card>
                    </Col>      
    );
};
export default BlogCard;