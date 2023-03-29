import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import books from "../books/fantasy.json"
import Button from 'react-bootstrap/Button';


class AllTheBooks extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {books.map((book) => {
                        return (
                            <Col xs={2} className="mb-3">
                                <Card className="h-100 d-flex justify-content-between" key={book.asin}>
                                    <Card.Img variant="top" src={book.img} height="200px" />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            {book.price}€
                                        </Card.Text>
                                        <Button variant="primary">Scopri di più</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default AllTheBooks