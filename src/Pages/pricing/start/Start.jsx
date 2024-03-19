import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoYY from "../../../assets/logo-07.png"
import Logouu from "../../../assets/logo-08.png"
import LogoWW from "../../../assets/logo-09.png"
import "./start.css"

const Start = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <div class="we_text">
                            <h3>What We Do?</h3>
                        </div>
                    </Col>
                    <Row>
                        <Col lg={4}>
                            <div className="we_writte">
                                <img src={LogoYY} alt="" />
                                <h4>Digital products </h4>
                                <p>By applying behavioral science to customer experience, we design engaging digital products used by millions of people.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="we_writte">
                                <img src={Logouu} alt="" />
                                <h4>Websites  Design</h4>
                                <p>From Slack to Facebook, we team up with marketing departments of large companies and startups to deliver award‑winning websites.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="we_writte">
                                <img src={LogoWW} alt="" />
                                <h4>Enterprise software </h4>
                                <p>We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.</p>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    )
}

export default Start