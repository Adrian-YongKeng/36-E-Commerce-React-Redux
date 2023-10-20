import { Container } from "react-bootstrap";
import CartItem from "../components/CartItem";
import {useSelector } from "react-redux";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    
    let subTotal = 0;

    cart.forEach((item) => {
        subTotal += parseInt(item.price.substring(2)) * item.amount;
    });
    
    return(
        <Container>
            <h2>Your Cart:</h2>
            {cart.map((item, index) =>(
                <CartItem 
                    key={index} 
                    item={item} 
                />
                ))}
                <h4 className="text-end me-5 mt-3 fs-2 fw-bold">Total: RM{subTotal}</h4>
        </Container>
    )
}