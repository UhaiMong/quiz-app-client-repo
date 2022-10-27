import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBook, FaFemale, FaHome, FaPaperclip, FaRocket, FaUser } from "react-icons/fa";

export default function StaticFaqSection() {
    return (
        <Container>
            <section>
                <h3
                    tag="h3"
                    className="text-center mb-4 pb-2 text-primary fw-bold"
                >
                    FAQ
                </h3>
                <p className="text-center mb-5">
                    Find the answers for the most frequently asked questions below
                </p>

                <Row>
                    <Col md="6" lg="4" className="mb-4">
                        <h6  className="mb-3 text-primary">
                            <FaPaperclip className="text-primary pe-2"/>
                            Is it safety for us?
                        </h6>
                        <p>
                            <strong>
                                Absolutely!
                            </strong>{" "}
                            We work with top payment companies which guarantees your safety
                            and security. All billing information is stored on our payment
                            processing partner.
                        </p>
                    </Col>
                    <Col md="6" lg="4" className="mb-4">
                        <h6  className="mb-3 text-primary">
                            <FaFemale/>
                         Can I cancel my subscription?
                        </h6>
                        <p>
                            <strong>
                                Yes, it is possible!
                            </strong>{" "}
                            You can cancel your subscription anytime in your account. Once the
                            subscription is cancelled, you will not be charged next month.
                        </p>
                    </Col>
                    <Col md="6" lg="4" className="mb-4">
                        <h6  className="mb-3 text-primary">
                            <FaUser className="text-primary pe-2"/>
                            Do you have yearly or life time subscription?
                        </h6>
                        <p>
                            Currently, we only offer monthly subscription. You can upgrade or
                            cancel your monthly account at any time with no further
                            obligation.
                        </p>
                    </Col>
                    <Col md="6" lg="4" className="mb-4">
                        <h6  className="mb-3 text-primary">
                            <FaRocket className="text-primary pe-2" />
                            Do you have any billing system for this course?
                        </h6>
                        <p>
                            Yes. Go to the billing section of your dashboard and update your
                            payment information.
                        </p>
                    </Col>
                    <Col md="6" lg="4" className="mb-4">
                        <h6  className="mb-3 text-primary">
                            <FaHome className="text-primary pe-2"/>
                            Do you create any issue?
                        </h6>
                        <p>
                            <strong>
                                Unfortunately no.
                            </strong>{" "}
                            We do not issue full or partial refunds for any reason.
                        </p>
                    </Col>
                    <Col md="6" lg="4" className="mb-4">
                        <h6  className="mb-3 text-primary">
                            <FaBook className="text-primary pe-2" /> 
                            Are you happy for free plan service for client?
                        </h6>
                        <p>
                            Of course! We’re happy to offer a free plan to anyone who wants to
                            try our service.
                        </p>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}
