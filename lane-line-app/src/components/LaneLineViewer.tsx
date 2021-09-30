import { laneLine } from '../interfaces/laneLine';
import { Row, Card } from 'react-bootstrap';

/**
 * Creates a single pool lane and the associated color and text to generate
 * inside
 * @param laneLine Lane Lane object
 * 
 * @returns A JSX.Element containing a single instance of a pool lane
 */
export function LaneLineViewer({laneLine}: {laneLine: laneLine}): JSX.Element {
    return(
    <Row>
      <Card bg={(laneLine.isSwimTeam) ? 'danger' : 'success'}
        style={{ width: '64rem' }}>
        <Card.Body>
          {lineText({laneLine})}
        </Card.Body> 
      </Card>
    </Row>)
}

/**
 * Determines the text that will display inside each lane line based off of how
 * many swimmers are in the pool, how many swimers are expected, and if swim
 * team is using the lane. 
 * @param laneLine Lane Lane object
 * 
 * @returns The text to be put inside the lane line card component
 */
function lineText({laneLine}: {laneLine: laneLine}): string {
  if (laneLine.isSwimTeam) {
    return "Swim Team";
  } else {
    return ("Open Lap Lane | Actual Swimmers: " + laneLine.ActualSwimmers + 
      " Estimated Swimmers: " + laneLine.EstimatedSwimmers);
  }
}

/**
 * Takes the date, calculates the milliseconds since the new year, and 
 * determines if it is summer pool season or not (i.e. if the 10 lane outdoor 
 * pool or 8 lane Bubble pool is open)
 * 
 * @returns If the pool season is "summer" or not
 */
function isSummer(): boolean {
  let todayDate: Date = new Date();
  let todayDateNum: number = (todayDate.getTime() - 
    (new Date(todayDate.getFullYear(), 0, 1)).getTime());

  if ((new Date(todayDate.getFullYear(), 4, 24)).getTime() <= todayDateNum &&
  (new Date(todayDate.getFullYear(), 9, 3)).getTime() >= todayDateNum) {
    return true;
  } else {
    return false;
  }
}

