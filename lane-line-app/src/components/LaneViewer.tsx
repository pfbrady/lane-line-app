import { Lane } from "../interfaces/lane";
import { Col, Row, Card, Button } from "react-bootstrap";
import React, { useEffect } from "react";

/**
 * Creates a single pool lane and the associated color and text to generate
 * inside
 * @param lane Lane object
 * @param setLane hook function that sets the updated lane
 *
 * @returns A JSX.Element containing a single instance of a pool lane
 */
export function LaneViewer({
  lane,
  setLane,
}: {
  lane: Lane;
  setLane: (l: Lane) => void;
}): JSX.Element {
  /**
   * Determines the text that will display inside each lane line based off of how
   * many swimmers are in the pool, how many swimers are expected, and if swim
   * team is using the lane.
   *
   * @returns The text to be put inside the lane card component
   */
  function laneText(): string {
    if (lane.isSwimTeam) {
      return "Lane " + (lane.laneIndex + 1) + " | Swim Team";
    } else {
      return (
        "Lane " +
        (lane.laneIndex + 1) +
        " | Open Lap Lane | Current Swimmers: " +
        lane.actualSwimmers
      );
    }
  }

  function toggleSwimTeam() {
    lane.isSwimTeam = !lane.isSwimTeam;
    lane.actualSwimmers = 0; //set to zero bc assumption is everyone gets out
    setLane({
      laneIndex: lane.laneIndex,
      estimatedSwimmers: lane.estimatedSwimmers,
      actualSwimmers: lane.actualSwimmers,
      isSwimTeam: lane.isSwimTeam,
    });
  }

  function toggleCurrentSwimmersUp() {
    lane.actualSwimmers++;
    setLane({
      laneIndex: lane.laneIndex,
      estimatedSwimmers: lane.estimatedSwimmers,
      actualSwimmers: lane.actualSwimmers,
      isSwimTeam: lane.isSwimTeam,
    });
  }

  function toggleCurrentSwimmersDown() {
    lane.actualSwimmers--;
    setLane({
      laneIndex: lane.laneIndex,
      estimatedSwimmers: lane.estimatedSwimmers,
      actualSwimmers: lane.actualSwimmers,
      isSwimTeam: lane.isSwimTeam,
    });
  }

  return (
    <Row>
      <Col>
        <Card
          bg={lane.isSwimTeam ? "danger" : "success"}
          style={{ width: "32rem" }}
          text={
            (lane.isSwimTeam ? "danger" : "success").toLowerCase() === "light"
              ? "dark"
              : "white"
          }
        >
          <Card.Body> {laneText()} </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark">
          <Col xs="auto">
            <Button
              variant="primary"
              size="sm"
              onClick={() => toggleSwimTeam()}
            >
              Toggle Swim Team {lane.isSwimTeam ? "OFF" : "ON"}
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="success"
              size="sm"
              onClick={() => toggleCurrentSwimmersUp()}
            >
              Add Swimmer
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="danger"
              size="sm"
              onClick={() => toggleCurrentSwimmersDown()}
            >
              Remove Swimmer
            </Button>
          </Col>
        </Card>
      </Col>
    </Row>
  );
}
