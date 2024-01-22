import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function FooterBar() {
  return (
    // fixed-bottom - add this to fix it in the bottom
    <footer className=" p-3">
      <Row>
        <Col md={12} lg={6}>
          <h5 class="mb-3">Acadezy</h5>
          <p>
          EdTech, short for Educational Technology, harnesses digital tools and platforms to enhance teaching, learning, and skill development.
           It encompasses diverse resources, from interactive apps to online courses, revolutionizing education worldwide.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5 className="mb-3">Links</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-none px-0">
              Frequently Asked Questions
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0">Courses Available</ListGroup.Item>
            <ListGroup.Item className="bg-none px-0">Contact</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* <Col md={6} lg={3}>
          <h5>course duration</h5>
          <Table striped className="timings">
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>8pm - 9pm</td>
              </tr>
              <tr>
                <td>Sat - Sun:</td>
                <td>8am - 10am</td>
              </tr>
            </tbody>
          </Table>
        </Col> */}
      </Row>
      <div className="text-center mt-2 bg-dark main-color p-3">
        © 2023 Copyright: Acadezy.com
      </div>
    </footer>
  );
}

export default FooterBar;
