import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/weather-windy";

export default function Header() {
  return (
    <div data-testid="legend-1">
      <Container >
        <Row className="justify-content-center">
          <Col xs={2}>{">= 5 µg/m³  |  "}<Icon icon={locationIcon} className="location-icon"/></Col>
          <Col xs={2}>{"< 5 µg/m³  |  "}<Icon icon={locationIcon} className="location-icon2"/> </Col>
        </Row>
      </Container>
    </div>
  );
}
