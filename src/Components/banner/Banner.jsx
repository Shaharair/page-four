import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./banner.css"

const Banner = () => {
    return (
        <section id="text">
            <Container>
                <Row className="text_main">
                    <Col lg={6}>
                        <div class="text_text">
                            <h6>Home  About us</h6>
                            <h3>Know more about innovate</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div class="text_text">
                            <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner