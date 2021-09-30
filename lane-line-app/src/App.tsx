import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import LANES from "./assets/poolDefault.json";
import { LaneViewer } from "./components/LaneViewer";
import { Lane } from "./interfaces/lane";
import { PoolViewer } from "./components/PoolViewer";
import { Pool } from "./interfaces/pool";
import { PoolNavbar } from "./components/PoolNavbar";
import { PoolSchedule } from "./components/PoolSchedule";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [lane, setLane] = useState<Lane>(LANES[0] as Lane);
  const [pool, setPool] = useState<Pool>({
    lanes: LANES,
    numberOfLanes: 10,
  } as Pool);

  return (
    <div className="App">
      <header> {/** JSON.stringify(pool) **/}</header>
      <PoolNavbar></PoolNavbar>
      <Row>
        <Col>
          <PoolViewer
            pool={pool}
            setPool={setPool}
            setLane={setLane}
          ></PoolViewer>
        </Col>
        <Col>
          <Dashboard></Dashboard>
        </Col>
      </Row>
      <LaneViewer lane={lane} setLane={setLane}></LaneViewer>
      <a href="schedule">
        <PoolSchedule></PoolSchedule>
      </a>
    </div>
  );
}

export default App;
