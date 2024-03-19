import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./got.css"

const Got = () => {
    return (
        <section id="got">
            <Container>
                <Row className="got_main">
                    <Col lg={3}>
                        <div class="got_text">
                            <h5>Lets talk</h5>
                            <h3>Got a project?</h3>
                        </div>
                    </Col>
                    <Col lg={{ span: 2, offset: 7 }}>
                        <div class="got_text">
                            <h6>Contact us</h6>
                        </div>
                    </Col>
                    <Col lg={11}>
                        <div class="got_text">
                            <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Got