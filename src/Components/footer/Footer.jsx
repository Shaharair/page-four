import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoIMG from "../../assets/logo.png"
import "./footer.css"

const Footer = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="footer_text">
                            <img src={LogoIMG} alt="" />
                            <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                        </div>
                    </Col>
                    <Col lg={{ span: 2, offset: 1 }}>
                        <div className="footer_menu">
                            <h4>Features</h4>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Benefit</li>
                                <li>Pricing</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="footer_menu">
                            <h4>Products</h4>
                            <ul>
                                <li>Task Management</li>
                                <li>Company growth</li>
                                <li>Time tracking</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer_menu">
                            <h4>Support</h4>
                            <ul>
                                <li>Customer service</li>
                                <li>Accessibility</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer_email">
                            <h6>@20201 Innovate.All rights reserved.</h6>
                        </div>
                    </Col>
                    <Col lg={{ span: 2, offset: 4 }}>
                        <div className="footer_email">
                            <h6>Privacy policy</h6>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer_email">
                            <h6>Terms & condition</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer