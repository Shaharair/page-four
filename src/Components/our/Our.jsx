import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BanImg from "../../assets/ban.png"
import "./our.css"

const Our = () => {
    return (
        <section id="img">
            <Container>
                <Row className="img_main">
                    <Col lg={6}>
                        <div className="img_img">
                            <img src={BanImg} alt="" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div class="img_text">
                            <h3>We conceive and translate our clients dreams into reality.</h3>
                            <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div class="img_text">
                            <h3>A single-minded focus on getting results.</h3>
                            <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
                        </div>
                    </Col>
                    <Col lg={{span:6,offset: 1}}>
                        <div className="img_img">
                            <img src={BanImg} alt="" />
                        </div>
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}

export default Our