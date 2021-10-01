import { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Pool } from "../interfaces/pool";
import { LaneViewer } from "./LaneViewer";
import { Lane } from "../interfaces/lane";
import { PoolForm } from "../interfaces/poolForm";
import { PoolFormViewer } from "./PoolFormViewer";

export function Dashboard({
  pool,
  poolForm,
  setPoolForm,
}: {
  pool: Pool;
  poolForm: PoolForm;
  setPoolForm: (pf: PoolForm) => void;
}): JSX.Element {
  return (
    <Card border="primary">
      <Card.Title>
        <h1>
          <strong>Dashboard</strong>
        </h1>
      </Card.Title>
      <Row>
        <Card bg="dark" text="white">
          <Col>
            <h2>Temperature: {poolForm.temperature}</h2>
          </Col>
          <Col>
            <h2>Chlorine: {poolForm.chlorine}</h2>
          </Col>
          <Col>
            <h2>pH: {poolForm.ph}</h2>
          </Col>
          <Col>
            <h2>Time of last update: {JSON.stringify(poolForm.time)}</h2>
          </Col>
        </Card>
      </Row>
      <Row>
        <PoolFormViewer
          poolForm={poolForm}
          setPoolForm={setPoolForm}
        ></PoolFormViewer>
      </Row>
    </Card>
  );
}
