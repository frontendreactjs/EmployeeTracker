import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import ApiService from "../../services/ApiService";

export default function UpdateSupervisor() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);
  const [msg, setMsg] = useState("");
  const [supId, setSupId] = useState(null);
  const [emp, setEmp] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ApiService.getEmployeeId()
      .then((res) => {
        console.log(res.data);
        setEmp(res.data);
      })
      .catch((error) => {
        console.log(error);
        setEmp(null);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (value > 0 && name === "employeeID") {
      ApiService.supervisorId(value)
        .then((res) => {
          console.log(res.data);
          setSupId(res.data);
          setMsg("");
        })
        .catch((error) => {
          console.log(error);
          setSupId(null);
          setMsg(
            error.response.data.errorMessage
              ? error.response.data.errorMessage
              : error.message
          );
        });
    }
  };
  // const formData = [
  //   {
  //     id: "employeeID",
  //     data: (

  //     ),
  //   },
  //   {
  //     id: "supervisorId",
  //     data: (

  //     ),
  //   },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    // setErrors(false);
    ApiService.updateSupervisorId(data)
      .then((res) => {
        console.log(res.data);
        //   alert("successfull");
        navigate("/hr");
        setStatus(false);
        // setErrors(false);
        setMsg("");
      })
      .catch((error) => {
        console.log(error);
        setStatus(false);
        // setErrors(true);
        setMsg(
          error.response.data.errorMessage
            ? error.response.data.errorMessage
            : error.message
        );
      });
  };

  return (
    <div id="add-employee" className="container-sm ">
      <h1 className="title text-center">Add Supervisor</h1>
      <Form onSubmit={handleSubmit}>
        {/* <div className="form"> */}
        <Form.Group className="mb-3 px-2">
          <Form.Label htmlFor="employeeID">
            Employee ID
            <nobr />
            <span className="text-danger"> *</span>
          </Form.Label>
          <Form.Select
            required
            id="employeeID"
            aria-label="Client Name"
            className="selectInput"
            name="employeeID"
            onChange={handleChange}
          >
            <option value="">{status ? "loading" : "select "}</option>
            {emp?.map((type, index) => (
              <option key={index} value={type.lancesoftId}>
                {type.firstName} {type.lastName}({type.lancesoftId})
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 px-2">
          <Form.Label htmlFor="supervisorId">
            {/* Supervisor */}
            Reports To
            <nobr />
            <span className="text-danger"> *</span>
          </Form.Label>
          <Form.Select
            required
            id="supervisorId"
            aria-label="Supervisor Id"
            className="selectInput"
            name="supervisorId"
            onChange={handleChange}
          >
            <option value="">{status ? "loading" : "select "}</option>
            {supId?.map((type) => (
              <option key={type.lancesoftId} value={type.empId}>
                {type.firstName} {type.lastName} ({type.lancesoftId})
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        {/* </div> */}
        <Button className="btn-signup px-2" type="submit">
          Submit
        </Button>{" "}
        <Button as={Link} to="/hr" variant="danger" className="px-2">
          Cancel
        </Button>
        {status && (
          <p className="text-success mb-2">
            Please wait while we are processing your request.
          </p>
        )}
        {<p className="text-danger mb-2">{msg}</p>}
      </Form>
    </div>
  );
}
