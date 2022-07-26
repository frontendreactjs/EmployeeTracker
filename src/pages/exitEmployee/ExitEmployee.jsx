import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../../components/cards/Cards";

export default function ExitEmployee() {
  const [data, setData] = useState({});
  // const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const employee = {
    id: 1,
    employeeId: "",
    employeeName: "",
    button: "Exit",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    // setErrors(false);
    // ApiService.promoteEmployee(data)
    //     .then((res) => {
    //         console.log(res.data);
    //         alert("successfull");
    //         navigate("/dashboard");
    //     }
    //     )
    //     .catch((error) => {
    //         console.log(error);
    //     }
    //     );
  };
  return (
    <div id="add-employee" className="container-sm ">
      <h1 className="title text-center">Exit Employee</h1>
      {status ? (
        <Cards key={1} data={employee} />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 px-2">
            <Form.Label htmlFor="employeeId">Employee ID</Form.Label>
            <Form.Control
              name="employeeId"
              id="employeeId"
              required
              type="text"
              placeholder="Enter Employee ID"
              defaultValue={data.employeeId}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            submit
          </Button>{" "}
          <Button as={Link} to="/dashboard" variant="danger">
            Cancel
          </Button>
        </Form>
      )}
    </div>
  );
}
