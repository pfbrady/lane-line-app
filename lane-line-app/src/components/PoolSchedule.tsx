import { Col, Row, Card, Button } from "react-bootstrap";

export function PoolSchedule(): JSX.Element {
  return (
    <Col>
      <iframe
        title="Western Family YMCA Pool Schedule"
        src="https://members.daxko.com/10009?branchId=3ba37a66ae8a4da0ac087b854816bebe"
        frameBorder="0"
        width="75%"
        height="750px"
      ></iframe>
    </Col>
  );
}
