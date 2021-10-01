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
import { PoolForm } from "./interfaces/poolForm";

function App() {
  const [pool, setPool] = useState<Pool>({
    lanes: LANES,
    numberOfLanes: 10,
  } as Pool);
  const [poolForm, setPoolForm] = useState({
    first: "Temp",
    last: "Temp",
    time: new Date(),
    chlorine: 0,
    ph: 0,
    totalSwimmers: 0,
    temperature: 0,
  } as PoolForm);

  return (
    <div className="App">
      <header> {/** JSON.stringify(pool) **/}</header>
      <PoolNavbar></PoolNavbar>
      <Row>
        <Col>
          <PoolViewer pool={pool} setPool={setPool}></PoolViewer>
        </Col>
        <Col>
          <Dashboard
            pool={pool}
            poolForm={poolForm}
            setPoolForm={setPoolForm}
          ></Dashboard>
        </Col>
      </Row>
      <a href="schedule">
        <PoolSchedule></PoolSchedule>
      </a>
    </div>
  );
}

export default App;
