import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoTTY from "../../assets/logo-07.png"
import LogoRRR from "../../assets/logo-08.png"
import Logoss from "../../assets/logo-09.png"
import "./blog.css"

const Blog = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <div class="do_text">
                            <h3>What We Do?</h3>
                        </div>
                    </Col>
                    <Row>
                        <Col lg={4}>
                            <div className="do_writte">
                                <img src={LogoTTY} alt="" />
                                <h4>Digital products </h4>
                                <p>By applying behavioral science to customer experience, we design engaging digital products used by millions of people.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="do_writte">
                                <img src={LogoRRR} alt="" />
                                <h4>Websites  Design</h4>
                                <p>From Slack to Facebook, we team up with marketing departments of large companies and startups to deliver award‑winning websites.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="do_writte">
                                <img src={Logoss} alt="" />
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

export default Blog