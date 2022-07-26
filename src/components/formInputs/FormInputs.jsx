import React, { Fragment } from "react";
import { Form } from "react-bootstrap";

export function FormInputs(props) {
  // console.log(props);
  return (
    <>
      <Form.Group className="mb-3 px-2">
        <Form.Label htmlFor={props.id}>{props.title}</Form.Label>
        <Form.Control
          name={props.name}
          id={props.id}
          required={props.required}
          type={props.type}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          onChange={props.handleChange}
          pattern={props.pattern}
          title={props.message}
        />
      </Form.Group>
    </>
  );
}
