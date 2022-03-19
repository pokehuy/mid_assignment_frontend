import { Carousel, Badge, Card, Container, Row, Col } from 'react-bootstrap'
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <br />
            <Carousel>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Card body>
                                    <h1>
                                        Welcome to the <Badge bg="primary">Rookies</Badge> library!
                                    </h1>
                                    <br />
                                    <br />
                                    <h1>
                                        We now have more than <Badge bg="info">50.000</Badge> books.
                                        📚📚📚
                                    </h1>
                                    <br />
                                    <br />
                                    <h1>
                                        and over <Badge bg="danger">899</Badge> 👨🏽‍🎓👨🏼‍💼👩🏻‍🔬 active users.

                                    </h1>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Card body>
                                    <h1>
                                        We provide some programming languages books like:
                                    </h1>
                                    <br />
                                    <br />
                                    <h1>
                                        👉🏼 <Badge bg="info">Javascript</Badge>
                                        <span>    </span><Badge bg="warning">C++</Badge>
                                        <span>         </span><Badge bg="dark" text="light">Java</Badge>
                                        <span>              </span><Badge bg="success">C-Sharp</Badge>
                                        <p> </p> and more.
                                    </h1>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default HomePage;