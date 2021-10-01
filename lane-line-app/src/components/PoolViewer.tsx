import { useState } from "react";
import { Pool } from "../interfaces/pool";
import { Lane } from "../interfaces/lane";
import { Col, Row, Card } from "react-bootstrap";
import { LaneViewer } from "./LaneViewer";
import LANES from "../assets/poolDefault.json";

export function PoolViewer({
  pool,
  setPool,
}: {
  pool: Pool;
  setPool: (p: Pool) => void;
}): JSX.Element {
  const [lane, setLane] = useState<Lane>(LANES[0] as Lane);

  /**
   * Takes the date, calculates the milliseconds since the new year, and
   * determines if it is summer pool season or not (i.e. if the 10 lane outdoor
   * pool or 8 lane Bubble pool is open)
   *
   * @returns If the pool season is "summer" or not
   */
  function isSummer(): boolean {
    let todayDate: Date = new Date();
    let todayDateNum: number = todayDate.getTime();

    if (
      new Date(todayDate.getFullYear(), 4, 24).getTime() <= todayDateNum &&
      new Date(todayDate.getFullYear(), 9, 3).getTime() >= todayDateNum
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (isSummer()) {
    if (pool.numberOfLanes === 8) {
      pool.lanes.push();
      pool.lanes.push();
      pool.numberOfLanes = pool.lanes.length;
    }
    return (
      <Card>
        <LaneViewer lane={pool.lanes[0]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[1]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[2]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[3]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[4]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[5]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[6]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[7]} setLane={setLane}></LaneViewer>
      </Card>
    );
  } else if (!isSummer() && pool.numberOfLanes === 10) {
    if (pool.numberOfLanes === 10) {
      pool.lanes.pop();
      pool.lanes.pop();
      pool.numberOfLanes = pool.lanes.length;
    }
    return (
      <Card>
        <LaneViewer lane={pool.lanes[0]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[1]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[2]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[3]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[4]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[5]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[6]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[7]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[8]} setLane={setLane}></LaneViewer>
        <LaneViewer lane={pool.lanes[9]} setLane={setLane}></LaneViewer>
      </Card>
    );
  } else {
    console.log(pool.numberOfLanes);
    return <div>[Pool Render]</div>;
  }
  /** 
   *   pool.lanes.map(
    (lane: Lane, laneIndex: number): JSX.Element => (
      <LaneViewer
        lane={pool.lanes[laneIndex - 1]}
        setLane={setLane}
      ></LaneViewer>
    )
  );
  */

  /** after many long hours trying to use maps to dynamically render the pool,
   * I've decided to cop out and hard code it
   */
}
