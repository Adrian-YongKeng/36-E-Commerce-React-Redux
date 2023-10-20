import { Button, Card, Col, Row , Badge} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { incrementItem, decrementItem, deleteFromCart } from "../feature/cart/cartSlice";

export default function CartItem({ item }){
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteFromCart(item));
    const handleIncrement = () => dispatch(incrementItem(item));
    const handleDecrement = () => dispatch(decrementItem(item));

    let subTotal = 0;
    subTotal += parseInt(item.price.substring(2)) * item.amount;
    
    return(
        <Card className="mb-2">
            <Card.Body>
                <Row>
                    <Col xs={3} md={2}>
                        <Card.Img
                            variant="top"
                            src={`https://picsum.photos/id/${item.id}/200`}
                            alt={item.name}
                        />
                    </Col>
                    <Col xs={3} md={5}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>{item.price}</Card.Text>
                    </Col>
                    <Col xs={4} md={3}>
                        <span className="fs-5 mt-5 text-secondary fw-bold">
                        RM{subTotal.toFixed(2)}
                        </span>
                        <div className="mt-5">
                        <Button variant="outline-secondary" onClick={handleDecrement}>
                             -
                        </Button>
                        <span className="fs-6 px-3 bg-white text-secondary">
                            {item.amount}
                        </span>
                        <Button variant="outline-secondary" onClick={handleIncrement}>
                            +
                        </Button>
                        </div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div className="d-flex flex-column align-items-end me-4 mt-4">
                        <Button variant="danger" onClick={handleDelete}>
                        <i className="bi bi-trash3"></i>
                        </Button>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}