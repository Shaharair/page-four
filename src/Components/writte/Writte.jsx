import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./writte.css"

const Writte = () => {
    return (
        <section id="work">
            <Container>
                <Row className="work_main">
                    <Col lg={2}>
                        <div className="work_one">
                            <h5>19+</h5>
                            <h6>Total top service</h6>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="work_one">
                            <h5>27+</h5>
                            <h6>Total top service</h6>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <div class="work_text">
                            <h3>The hundred of completed works still counting</h3>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div class="work_one">
                            <h5>98%</h5>
                            <h6>Total top service</h6>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div class="work_one">
                            <h5>1,458</h5>
                            <h6>Usual users</h6>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <div class="work_text">
                            <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
                            <h4>More about us</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Writte