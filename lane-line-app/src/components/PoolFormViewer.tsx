import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { PoolForm } from "../interfaces/poolForm";

/**
 * Creates a pool form
 *
 * Template taken from 'https://react-bootstrap.github.io/components/forms/'
 *
 *
 * @returns A JSX.Element containing a single instance of a chemical form
 */
export function PoolFormViewer({
  poolForm,
  setPoolForm,
}: {
  poolForm: PoolForm;
  setPoolForm: (pf: PoolForm) => void;
}): JSX.Element {
  const [temp, setTemp] = useState<number>(0);
  const [chlor, setChlor] = useState<number>(0);
  const [pH, setpH] = useState<number>(0);

  function submitForm() {
    poolForm.temperature = temp;
    poolForm.chlorine = chlor;
    poolForm.ph = pH;
    poolForm.time = new Date();
    setPoolForm({ ...poolForm });
  }

  return (
    <Card>
      <Form>
        <Form.Group className="mb-3" controlId="formTemp">
          <Form.Label>Temperature (°C)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter temperature"
            value={temp}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) =>
              setTemp(parseInt(ev.target.value))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formChlor">
          <Form.Label>Chlorine (ppm)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Chlorine"
            value={chlor}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) =>
              setChlor(parseInt(ev.target.value))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formpH">
          <Form.Label>pH</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pH"
            value={pH}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) =>
              setpH(parseInt(ev.target.value))
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => submitForm()}>
          Update App
        </Button>
      </Form>
    </Card>
  );
}
