import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./look.css"

const Look = () => {
  return (
    <section id="text">
        <Container>
            <Row className="text_main">
                <Col lg={{span:6,offset:3}}>
                <div class="text_text">
                        <h5>Home  About us</h5>
                        <h3>Know more about innovate</h3>
                        <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Look