import { laneLine } from '../interfaces/laneLine';
import { Col, Card } from 'react-bootstrap';

export function LaneLineViewer({laneLine}: {laneLine: laneLine}): JSX.Element {
    return(
    <Col>
      <Card bg={(laneLine.isSwimTeam) ? 'danger' : 'success'}
        style={{ width: '64rem' }}>
        <Card.Body>
          {lineText({laneLine})}
        </Card.Body>
      </Card>
    </Col>)
}

function lineText({laneLine}: {laneLine: laneLine}): string {
  if (laneLine.isSwimTeam) {
    return "Swim Team";
  } else {
    return ("Open Lap Lane | Actual Swimmers: " + laneLine.ActualSwimmers + 
      " Estimated Swimmers: " + laneLine.EstimatedSwimmers);
  }
}

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

