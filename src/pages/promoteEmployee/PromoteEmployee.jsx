import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function PromoteEmployee() {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

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
      <h1 className="title text-center">Promote Employee</h1>
      {status ? (
        <Form>
          <Form.Group className="mb-3 px-2">
            <Form.Label htmlFor="employeeId">Employee ID</Form.Label>
            <Form.Control
              name="employeeId"
              id="employeeId"
              required
              disabled
              type="text"
              placeholder="Enter Employee ID"
              defaultValue={data.employeeId}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 px-2">
            <Form.Label htmlFor="position">Position</Form.Label>
            <Form.Select
              required
              id="position"
              aria-label="Default select example"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              <option value="">select</option>
              <option value="1">Manager</option>
              <option value="2">Lead</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 px-2">
            <Form.Label htmlFor="salary">Salary</Form.Label>
            <Form.Control
              name="salary"
              id="salary"
              required
              type="number"
              placeholder="Enter salary"
              defaultValue={data.salary}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 px-2">
            <Form.Label htmlFor="position">Supervisor</Form.Label>
            <Form.Select
              required
              id="position"
              aria-label="Default select example"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              <option value="">select</option>
              <option value="1">Manager</option>
              <option value="2">Lead</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 px-2">
            <Form.Label htmlFor="department">Department</Form.Label>
            <Form.Select
              required
              id="department"
              aria-label="Default select example"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              <option value="">select</option>
              <option value="1">Java</option>
              <option value="2">.net</option>
              <option value="3">Hr</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 px-2">
            <Form.Label htmlFor="pratice">Pratice</Form.Label>
            <Form.Select
              required
              id="pratice"
              aria-label="Default select example"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              <option value="">select</option>
              <option value="1">Java</option>
              <option value="2">.net</option>
              <option value="3">devops</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            submit
          </Button>{" "}
          <Button as={Link} to="/dashboard" variant="danger">
            Cancel
          </Button>
        </Form>
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
          <Button as={Link} to="/hr" variant="danger">
            Cancel
          </Button>
        </Form>
      )}
    </div>
  );
}

export default PromoteEmployee;
