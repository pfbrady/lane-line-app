import { Lane } from '../interfaces/lane';
import { Col, Row, Card, Button } from 'react-bootstrap';

/**
 * Creates a single pool lane and the associated color and text to generate
 * inside
 * @param lane Lane object
 * 
 * @returns A JSX.Element containing a single instance of a pool lane
 */
export function LaneViewer({lane, setLane}: {lane: Lane, setLane: (l: Lane) => 
    void}): JSX.Element {


    /**
     * Determines the text that will display inside each lane line based off of how
     * many swimmers are in the pool, how many swimers are expected, and if swim
     * team is using the lane. 
     * 
     * @returns The text to be put inside the lane card component
     */
    function laneText(): string {
      if (lane.isSwimTeam) {
        return "Swim Team";
      } else {
        return ("Open Lap Lane | Actual Swimmers: " + lane.actualSwimmers + 
          " Estimated Swimmers: " + lane.estimatedSwimmers);
      }
    }

    function toggleSwimTeam() {

    }



    return(
      <Row>
        <Col>
        <Card bg={(lane.isSwimTeam) ? 'danger' : 'success'}
          style={{ width: '64rem' }}>
          <Card.Body> {laneText} </Card.Body> 
        </Card>
        <Button>

        </Button>
      </Col>
      <Col>
        <Button variant="primary" onClick={toggleSwimTeam}>
          Toggle Swim Team {(lane.isSwimTeam) ? 'OFF' : 'ON'}
        </Button>
      </Col>
    </Row>
    )
}