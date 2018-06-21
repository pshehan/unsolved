import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="sm-10" offset='sm-1'>
        <Jumbotron>
          <h1 className="text-center">404 OOPS!  You did something wrong</h1>
          <h1 className="text-center">
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
              <br/>
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default NoMatch;
