import { lane } from '../interfaces/lane';
import { Row, Card } from 'react-bootstrap';

/**
 * Creates a single pool lane and the associated color and text to generate
 * inside
 * @param lane Lane object
 * 
 * @returns A JSX.Element containing a single instance of a pool lane
 */
export function LaneViewer({lane}: {lane: lane}): JSX.Element {
    return(
    <Row>
      <Card bg={(lane.isSwimTeam) ? 'danger' : 'success'}
        style={{ width: '64rem' }}>
        <Card.Body>
          {laneText({lane})}
        </Card.Body> 
      </Card>
    </Row>)
}

/**
 * Determines the text that will display inside each lane line based off of how
 * many swimmers are in the pool, how many swimers are expected, and if swim
 * team is using the lane. 
 * @param lane Lane object
 * 
 * @returns The text to be put inside the lane card component
 */
function laneText({lane}: {lane: lane}): string {
  if (lane.isSwimTeam) {
    return "Swim Team";
  } else {
    return ("Open Lap Lane | Actual Swimmers: " + lane.actualSwimmers + 
      " Estimated Swimmers: " + lane.estimatedSwimmers);
  }
}
