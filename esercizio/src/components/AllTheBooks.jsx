import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import books from "../books/fantasy.json"


class AllTheBooks extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {books.map((book) => {
                        return (
                            <Col xs={2} className="mb-3">
                                <Card className="bg-white text-white h-100 justify-content-center" key={book.asin}>
                                    <Card.Img src={book.img} alt={book.title} />
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