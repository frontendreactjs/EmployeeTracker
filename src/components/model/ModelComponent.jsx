import React from "react";
import { useState } from "react";
import { Button, Modal, Col, Row, Form } from "react-bootstrap";
import moment from "moment";
import "./modelComponent.css";
import { useEffect } from "react";
import ApiService from "../../services/ApiService";

function ModelComponent(props) {
  // console.log(props.data);
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
  };

  const handleEdit = () => {
    setDisabled(true);
  };
  const handleClose = () => {
    props.onHide();
  };

  useEffect(() => {
    ApiService.getEmployeeById(props.data)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.data]);

  return (
    <>
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="title">
            Employee Profile
          </Modal.Title>
          <Button className="btnClose" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row xs="auto">
              <Col>
                <h5>Employee Details</h5>
                <hr></hr>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="firstName">EmployeeID</Form.Label>
                  <Form.Control
                    name="employeeId"
                    id="employeeId"
                    required
                    disabled={disabled ? "" : "disabled"}
                    type="text"
                    placeholder="Enter employeeId"
                    defaultValue={data.employeeId}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="lastName">Employee name</Form.Label>
                  <Form.Control
                    name="employeeName"
                    id="employeeName"
                    required
                    type="text"
                    placeholder="enter employee name"
                    disabled={disabled ? "" : "disabled"}
                    defaultValue={data.employeeName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="joiningDate">Joining date</Form.Label>
                  <Form.Control
                    name="joiningDate"
                    id="joiningDate"
                    required
                    type="date"
                    placeholder="Enter joining Date"
                    disabled={disabled ? "" : "disabled"}
                    defaultValue={moment(data?.joiningDate).format(
                      "YYYY-MM-DD"
                    )}
                    onChange={handleChange}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  name="email"
                  id="email"
                  // autoComplete="email"
                  required
                  type="email"
                  placeholder="name@gmail.com"
                  disabled={disabled ? "" : "disabled"}
                  defaultValue={data.email}
                  onChange={handleChange}
                />
              </Form.Group> */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="dateOfBirth">Date of Birth</Form.Label>
                  <Form.Control
                    name="dob"
                    id="dateOfBirth"
                    required
                    type="date"
                    disabled={disabled ? "" : "disabled"}
                    defaultValue={moment(data.dob).format("YYYY-MM-DD")}
                    onChange={handleChange}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3 checkbox">
                <Form.Label>Gender : </Form.Label>{" "}
                <Form.Check
                  required
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  defaultValue={data.gender}
                  onChange={(e) => {
                    data.gender = "Male";
                  }}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  defaultValue={data.gender}
                  onChange={(e) => {
                    data.gender = "Female";
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="phone number">Phone Number</Form.Label>
                <Form.Control
                  // required
                  id="phone number"
                  type="tel"
                  disabled={disabled ? "" : "disabled"}
                  // pattern="[+91][0-9]{13}"
                  // pattern="[0-9]{10}"
                  message="please enter correct number"
                  placeholder="please enter phone number"
                  name="phoneNo"
                  // placeholder="+919999999999"
                  // pattern="[+91][0-9].{11}"
                  // maxLength={13}
                  title="enter phone number like +919999999999"
                  defaultValue={data.phoneNo}
                  onChange={handleChange}
                />
              </Form.Group> */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="salary">Salary</Form.Label>
                  <Form.Control
                    required
                    disabled={disabled ? "" : "disabled"}
                    id="salary"
                    type="number"
                    placeholder="please enter salary"
                    name="salary"
                    title="enter salary"
                    defaultValue={data.salary}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="practice">Practice</Form.Label>
                  <Form.Control
                    required
                    disabled={disabled ? "" : "disabled"}
                    id="practice"
                    type="text"
                    placeholder="please enter practice"
                    name="practice"
                    title="enter salary"
                    defaultValue={data.practice}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="designationAtLs">
                    Designation at Lancesoft
                  </Form.Label>
                  <Form.Control
                    required
                    disabled={disabled ? "" : "disabled"}
                    id="designationAtLs"
                    type="text"
                    placeholder="please enter designation at Lancesoft"
                    name="designationAtLs"
                    title="enter designation"
                    defaultValue={data.designationAtLs}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="benchTen">Bench Tenure</Form.Label>
                  <Form.Control
                    disabled
                    id="benchTen"
                    type="text"
                    name="benchTen"
                    defaultValue={data.benchTen}
                    // onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="tenure">Tenure</Form.Label>
                  <Form.Control
                    disabled
                    id="tenure"
                    type="text"
                    name="tenure"
                    defaultValue={data.tenure}
                    // onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <h5>Client Details</h5>
                <hr></hr>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="designationAtClient">
                    Designation at Client
                  </Form.Label>
                  <Form.Control
                    // required
                    id="designationAtClient"
                    type="text"
                    disabled={disabled ? "" : "disabled"}
                    placeholder="please enter designation at Client"
                    name="designationAtLs"
                    title="enter designation"
                    defaultValue={
                      data.clientDetailsOfEmployee?.designationAtClient || "N/A"
                    }
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="clientName">Client Name</Form.Label>
                  <Form.Control
                    // required
                    id="clientName"
                    disabled={disabled ? "" : "disabled"}
                    type="text"
                    placeholder="please enter Client name"
                    name="clientName"
                    title="enter client name"
                    defaultValue={data.clientDetailsOfEmployee?.clientName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="clientBilling">
                    Client billing
                  </Form.Label>
                  <Form.Control
                    // required
                    id="clientBilling"
                    type="number"
                    disabled={disabled ? "" : "disabled"}
                    placeholder="please enter Client billing"
                    name="clientBilling"
                    title="enter Client billing"
                    defaultValue={data.clientDetailsOfEmployee?.clientBilling}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="poSdate">PO Start date</Form.Label>
                  <Form.Control
                    // required
                    id="poSdate"
                    type="date"
                    disabled={disabled ? "" : "disabled"}
                    placeholder="please enter PO Start date"
                    name="poSdate"
                    title="enter PO Start date"
                    defaultValue={moment(
                      data.clientDetailsOfEmployee?.poSdate
                    ).format("YYYY-MM-DD")}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="poEdate">PO end date</Form.Label>
                  <Form.Control
                    // required
                    id="poEdate"
                    disabled={disabled ? "" : "disabled"}
                    type="date"
                    placeholder="please enter PO end date"
                    name="poEdate"
                    title="enter PO end date"
                    defaultValue={moment(
                      data.clientDetailsOfEmployee?.poEdate
                    ).format("YYYY-MM-DD")}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <h5>Bill</h5>
                <hr></hr>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="paidTillNow">Paid Till Now</Form.Label>
                  <Form.Control
                    disabled
                    id="paidTillNow"
                    type="text"
                    name="paidTillNow"
                    defaultValue={data.bill?.paidTillNow}
                    // onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="benchExp">Total Expences</Form.Label>
                  <Form.Control
                    disabled
                    id="benchExp"
                    type="text"
                    name="benchExp"
                    defaultValue={data.bill?.benchExp}
                    // onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="cubicalCost">Cubical cost</Form.Label>
                  <Form.Control
                    required
                    disabled={disabled ? "" : "disabled"}
                    id="cubicalCost"
                    type="number"
                    placeholder="please enter cubical cost"
                    name="cubicalCost"
                    title="enter Cubical cost"
                    defaultValue={data.bill?.cubicalCost}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="foodCost">Food Cost</Form.Label>
                  <Form.Control
                    required
                    id="foodCost"
                    disabled={disabled ? "" : "disabled"}
                    type="number"
                    placeholder="please enter food Cost"
                    name="foodCost"
                    title="enter food Cost"
                    defaultValue={data.bill?.foodCost}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="transportCost">
                    Transport Cost
                  </Form.Label>
                  <Form.Control
                    required
                    id="transportCost"
                    type="number"
                    disabled={disabled ? "" : "disabled"}
                    placeholder="please enter Transport Cost"
                    name="transportCost"
                    title="enter Transport Cost"
                    defaultValue={data.bill?.transportCost}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="profit">Profit/Loss</Form.Label>
                  <Form.Control
                    disabled
                    id="profit"
                    type="text"
                    name="profit"
                    defaultValue={data.bill?.profit}
                  />
                </Form.Group>
                {disabled ? (
                  <Button className="btn-signup" type="submit">
                    Submit
                  </Button>
                ) : ["md"].includes(props.type) ? (
                  <Button className="btn-signup" type="submit">
                    Transfer
                  </Button>
                ) : (
                  <Button
                    className="btn-signup"
                    onClick={handleEdit}
                    // type="submit"
                  >
                    Edit
                  </Button>
                )}{" "}
                <Button variant="danger" onClick={() => setDisabled(false)}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelComponent;
