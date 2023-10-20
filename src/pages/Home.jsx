import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item";


const items = [
    {id: 1, name:"Pen", description: "It's a pen", price: "RM10"},
    {id: 2, name:"Laptop", description: "I think it's a laptop", price: "RM1200"},
    {id: 3, name:"iPhone 2", description: "Might be Iphone 3", price: "RM30"},
    {id: 4, name:"iPad Air", description: "Ipad Air 12", price: "RM1000" ,},
    {id: 5, name:"iWatch", description: "Might be iWatch", price: "RM899"},
    {id: 6, name:"AirPods", description: "It's a pen", price: "RM399"},
    {id: 7, name:"Apple Pencil", description: "It's a pencil", price: "RM300"},
    {id: 8, name:"Apple Tv", description: "It's a TV", price: "RM2999"},
];

export default function Home(){
    return(
        <Container>
            <Row>
                {items.map((item) => (
                    <Col key={item.id} md={3}>
                        <Item item={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}