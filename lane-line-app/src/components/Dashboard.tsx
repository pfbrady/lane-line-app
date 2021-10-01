import { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Pool } from "../interfaces/pool";
import { LaneViewer } from "./LaneViewer";
import { Lane } from "../interfaces/lane";

export function Dashboard({ pool }: { pool: Pool }): JSX.Element {
  const [temp, setTemp] = useState(0);
  const [totalSwimmers, setTotalSwimmers] = useState(0);

  function addSwimmers() {
    let swimmers: number = 0;
    for (let i = 0; i > pool.numberOfLanes; i++) {
      swimmers += pool.lanes[i].actualSwimmers;
    }
    setTotalSwimmers(swimmers);
  }

  return (
    <Card>
      <Row>
        <Col>Total Number of Swimmers in the pool: {addSwimmers}</Col>
        <Col>Temperature:</Col>
        <Col>Time of last update:</Col>
      </Row>
    </Card>
  );
}
