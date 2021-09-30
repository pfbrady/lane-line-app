import { Pool } from "../interfaces/pool";
import { Lane } from "../interfaces/lane";
import { Col, Row, Card } from "react-bootstrap";
import { LaneViewer } from "./LaneViewer";
import { LanguageServiceMode, PollingWatchKind } from "typescript";

export function PoolViewer({
  pool,
  setPool,
  setLane,
}: {
  pool: Pool;
  setPool: (p: Pool) => void;
  setLane: (l: Lane) => void;
}): JSX.Element {
  /**
   * Takes the date, calculates the milliseconds since the new year, and
   * determines if it is summer pool season or not (i.e. if the 10 lane outdoor
   * pool or 8 lane Bubble pool is open)
   *
   * @returns If the pool season is "summer" or not
   */
  function isSummer(): boolean {
    let todayDate: Date = new Date();
    let todayDateNum: number =
      todayDate.getTime() - new Date(todayDate.getFullYear(), 0, 1).getTime();

    if (
      new Date(todayDate.getFullYear(), 4, 24).getTime() <= todayDateNum &&
      new Date(todayDate.getFullYear(), 9, 3).getTime() >= todayDateNum
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (isSummer() && pool.numberOfLanes === 8) {
    pool.lanes.push();
    pool.lanes.push();
    pool.numberOfLanes = pool.lanes.length;
  } else if (!isSummer() && pool.numberOfLanes === 10) {
    pool.lanes.pop();
    pool.lanes.pop();
    pool.numberOfLanes = pool.lanes.length;
  }
  pool.lanes.map(
    (lane: Lane, laneIndex: number): JSX.Element => (
      <LaneViewer
        lane={pool.lanes[laneIndex - 1]}
        setLane={setLane}
      ></LaneViewer>
    )
  );
  return <div></div>;
}
