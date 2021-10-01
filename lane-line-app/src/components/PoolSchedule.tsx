import { Col } from "react-bootstrap";

/**
 * Simply obtains the entire Western YMCA schedule (which includes the pool
 * schedule) for members to referance when viewing the app
 *
 * @returns A JSX element representing the imported iframe YMCA schedule
 */
export function PoolSchedule(): JSX.Element {
  return (
    <Col>
      <a href="schedule">
        <iframe
          title="Western Family YMCA Pool Schedule"
          src="https://members.daxko.com/10009?branchId=3ba37a66ae8a4da0ac087b854816bebe"
          frameBorder="0"
          width="75%"
          height="750px"
        ></iframe>
      </a>
    </Col>
  );
}
