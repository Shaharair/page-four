import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoImg from "../../assets/logo-01.png"
import LogoOne from "../../assets/logo-02.png"
import LogoTwo from "../../assets/logo-03.png"
import LogoThree from "../../assets/logo-04.png"
import LogoFour from "../../assets/logo-05.png"
import LogoFive from "../../assets/logo-06.png"
import "./logo.css"

const Logo = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg={{ span: 9, offset: 2 }}>
                        <div class="logo_text">
                            <h3>Trusted by top global companies And orginizations</h3>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="logo_img">
                            <img src={LogoImg} alt="" />
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="logo_img">
                            <img src={LogoOne} alt="" />
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="logo_img">
                            <img src={LogoTwo} alt="" />
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="logo_img">
                            <img src={LogoThree} alt="" />
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="logo_img">
                            <img src={LogoFour} alt="" />
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="logo_img">
                            <img src={LogoFive} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Logo