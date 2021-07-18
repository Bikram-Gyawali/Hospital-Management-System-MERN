import { useState, useEffect } from 'react'
import { Col, Row, Image, Form, Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import { Link } from 'react-router-dom'

const CartScreen = ({ location, match }) => {
    const qty = 1;
    const productId = match.params.id
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
        <>
            <Row>
                <Col md={9}>
                    <p style={{ fontSize: '2rem' }}>Shopping Cart</p>
                    {cartItems.length === 0 ? (
                        <h2>
                            You Cart is Empty <Link to="/">Go Back</Link>
                        </h2>
                    ) : (
                        <ListGroup variant="flush">
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image
                                                src={item.image}
                                                lat={item.name}
                                                fluid
                                                rounded
                                            ></Image>
                                        </Col>

                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>

                                        <Col md={2}>Rs {item.cost}</Col>

                                        <Col md={2}>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.id, Number(e.target.value))
                                                    )
                                                }
                                            >
                                                {[...Array(5).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>

                                        <Col md={2}>
                                            <Button
                                                type="button"
                                                variant="light"
                                            >
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>
                                    Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                                    items
                                </h2>
                                $
                                {cartItems
                                    .reduce((acc, item) => acc + item.qty * item.cost, 0)
                                    .toFixed(2)}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    type="button"
                                    className="btn-block"
                                    disabled={cartItems.length === 0}
                                >
                                    Proceed to Checkout
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default CartScreen