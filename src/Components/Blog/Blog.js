import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <h3>Some Important Questions and Answer!</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is cors?</Accordion.Header>

                    <Accordion.Body>
                        CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
                    </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <h5>I am using firebase because it has--</h5> <br />
                        <li>Realtime Database</li>
                        <li>Cloud Firestore</li>
                        <li>Authentication system</li>
                        <li>Remote Configuration</li>
                        <li>Hosting Dynamic website</li>
                        <h5>Other Authentication option to implement.</h5>
                        <li>Play games</li>
                        <li>Phone</li>
                        <li>Anonymous</li>
                        <li>Microsoft</li>
                        <li>Apple</li>
                        <li>Twitter</li>
                        <li>Yahoo</li>
                        <li>Game center</li>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private rout work?</Accordion.Header>

                    <Accordion.Body>
                        The react private route component renders a route component if the user is logged in and in an authorized role for the route, if the user isn't logged in they're redirected to the /login page, if the user is logged in but aren't in an authorized role they're redirected to the home page.
                    </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node js? How does node work?</Accordion.Header>

                    <Accordion.Body>
                        <span> Node.js is an open-source, cross-platform JavaScript runtime environment used for executing JavaScript code outside of a web browser. Node.js is a great web framework</span><div></div>
                        <span>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread.</span>
                    </Accordion.Body>

                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;