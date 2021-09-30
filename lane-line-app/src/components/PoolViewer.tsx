import { lane } from '../interfaces/lane';
import { Col, Row, Card } from 'react-bootstrap';
import { LaneViewer } from './LaneViewer';

function PoolViewer({lane}: {lane: lane}): JSX.Element {

    
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
    
    if (isSummer()) {
        return( <Col>
          <Row>
            <LaneViewer lane={lane}></LaneViewer>
          </Row>
        </Col>)

    } else {

    }
}