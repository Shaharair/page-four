import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Imagesrr from "../../assets/images.png"
import "./pricing.css"

const Pricing = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={5}>
                <div class="do_text">
                        <h3>What We Do?</h3>
                        <p>Through strategy, design, and planning we build brand identities that connect with your Nesi.</p>
                    </div>
                </Col>
                <Col lg={6}>
                <div class="do_writte">
                        <h4>A single-minded focus on getting results.</h4>
                        <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
                        <h6>More about us</h6>
                        </div>
                </Col>
                <Col lg={8}>
                    <div className="do_img">
                        <img src={Imagesrr} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Pricing