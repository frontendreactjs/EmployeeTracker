import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Container, Dropdown, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import lancesoft_logo from "../../lancesoft_logo.png";
import ApiService from "../../services/ApiService";
import ModelComponent from "../model/ModelComponent";
import "./header.css";
export default function Header() {
  let type = sessionStorage.getItem("type");
  let user = sessionStorage.getItem("firstName");
  let navPath = `/${type}`;
  // console.log(type);
  let id = sessionStorage.getItem("Id");
  const [modalShow, setModalShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [token, setToken] = useState(sessionStorage.getItem("Access_Token"));
  // const username = sessionStorage.getItem("username");
  const handlefunction = () => {
    sessionStorage.clear();
    // alert(`Logout Successful`);
    setToken((data) => (data = sessionStorage.getItem("Access_Token")));
  };
  const handleOnClick = () => {
    setModalShow(true);
    // ApiService.getEmployeeById(props.data.id)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  useEffect(() => {
    if (type === "lead") {
      ApiService.totalLead()
        .then((res) => {
          console.log(res.data);
          setTotal(res.data);
        })
        .catch((err) => {
          console.log(err);
          setTotal(0);
        });
    }
    if (type === "manager") {
      ApiService.totalManager()
        .then((res) => {
          console.log(res.data);
          setTotal(res.data);
        })
        .catch((err) => {
          console.log(err);
          setTotal(0);
        });
    }
    if (type === "general_manager") {
      ApiService.totalManager()
        .then((res) => {
          console.log(res.data);
          setTotal(res.data);
        })
        .catch((err) => {
          console.log(err);
          setTotal(0);
        });
    }
    if (type === "ch") {
      ApiService.totalCH()
        .then((res) => {
          console.log(res.data);
          setTotal(res.data);
        })
        .catch((err) => {
          console.log(err);
          setTotal(0);
        });
    }

    if (type === "md") {
      ApiService.totalMD()
        .then((res) => {
          console.log(res.data);
          setTotal(res.data);
        })
        .catch((err) => {
          console.log(err);
          setTotal(0);
        });
    }
  }, [type]);
  return (
    <>
      <Navbar className="color-nav" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to={navPath} id="navbar-brand">
              <img
                src={lancesoft_logo}
                className="icon"
                alt="lancesoft_logo2"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="m-2" to="/" id="nav-link"></Link>
            </Nav>
            <Nav id="nav">
              {" "}
              {[null, undefined].includes(token) && (
                <Link className="m-2" to="/" id="nav-link">
                  Login
                </Link>
              )}
              {![null, undefined].includes(token) &&
                (["finance"].includes(type) ? (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="toggle"
                        variant=""
                        // id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                      >
                        <p id="nav-link" className="username">
                          Domestic
                        </p>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Row>
                          <Link
                            className="m-2"
                            to="/clientDomestic"
                            id="nav-link"
                          >
                            Client Domestic
                          </Link>
                          <Link
                            className="m-2"
                            to="/internalDomestic"
                            id="nav-link"
                          >
                            Internal Domestic
                          </Link>
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="toggle"
                        variant=""
                        // id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                      >
                        <p id="nav-link" className="username">
                          International
                        </p>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Row>
                          <Link
                            className="m-2"
                            to="/clientInternational"
                            id="nav-link"
                          >
                            Client International
                          </Link>
                          <Link
                            className="m-2"
                            to="/internalInternational"
                            id="nav-link"
                          >
                            Internal International
                          </Link>
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Link
                      className="m-2"
                      to="/"
                      onClick={handlefunction}
                      id="nav-link"
                    >
                      Logout
                    </Link>
                  </>
                ) : ["hr"].includes(type) ? (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="toggle"
                        variant=""
                        id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                      >
                        {/* <img src={profilepic} alt="profile" className="img" /> */}
                        <p id="nav-link" className="username">
                          Employee
                        </p>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Row>
                          <Link className="m-2" to="/hr/register" id="nav-link">
                            Create Employee Credentials
                          </Link>
                          <Link
                            className="m-2"
                            to="/hr/addEmployee"
                            id="nav-link"
                          >
                            Add Employee details
                          </Link>

                          <Link
                            className="m-2"
                            to="/hr/promoteEmployee"
                            id="nav-link"
                          >
                            Promote Employee
                          </Link>
                          <Link
                            className="m-2"
                            to="/hr/exitEmployee"
                            id="nav-link"
                          >
                            Exit Employee
                          </Link>
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="toggle"
                        variant=""
                        id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                      >
                        {/* <img src={profilepic} alt="profile" className="img" /> */}
                        <p id="nav-link" className="username">
                          Addon option
                        </p>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Row>
                          <Link
                            className="m-2"
                            to="/hr/addDepartment"
                            id="nav-link"
                          >
                            Add departments
                          </Link>
                          <Link
                            className="m-2"
                            to="/hr/addEmpType"
                            id="nav-link"
                          >
                            Add employee type
                          </Link>
                          <Link
                            className="m-2"
                            to="/hr/updateSupervisorId"
                            id="nav-link"
                          >
                            Update reporting person
                          </Link>

                          <Link
                            className="m-2"
                            to="/hr/updateDesignation"
                            id="nav-link"
                          >
                            Update designation
                          </Link>
                          <Link
                            className="m-2"
                            to="/hr/addSubDepartment"
                            id="nav-link"
                          >
                            Add Sub departments
                          </Link>

                          <Link
                            className="m-2"
                            to="/hr/addAddressType"
                            id="nav-link"
                          >
                            Add address type
                          </Link>
                          <Link
                            className="m-2"
                            to="/hr/addDesignation"
                            id="nav-link"
                          >
                            Add designation
                          </Link>
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* <Button
                      variant="link"
                      id="nav-link"
                      onClick={() => handleOnClick()}
                    >
                      Profile
                    </Button>
                    <Link
                      className="m-2"
                      to="/"
                      onClick={handlefunction}
                      id="nav-link"
                    >
                      Logout
                    </Link> */}
                  </>
                ) : ["md", "general_manager", "ch"].includes(type) ? (
                  <>
                    <p className="total">
                      {total > 0 ? "Profit" : "Loss"}: <nobr />
                      <span
                        className={
                          total > 0
                            ? "text-success font-weight-bold"
                            : "text-danger font-weight-bold"
                        }
                        id="nav-link"
                      >
                        {total}
                      </span>
                    </p>
                    {/* <Link className="m-2" to="/" id="nav-link">
                      Approve
                    </Link> */}
                    {/* <Button
                      variant="link"
                      id="nav-link"
                      onClick={() => handleOnClick()}
                    >
                      Profile
                    </Button>
                    <Link
                      className="m-2"
                      to="/"
                      onClick={handlefunction}
                      id="nav-link"
                    >
                      Logout
                    </Link> */}
                  </>
                ) : ["manager"].includes(type) ? (
                  <>
                    <p className="total">
                      {total > 0 ? "Profit" : "Loss"} : <nobr />
                      <span
                        className={
                          total > 0
                            ? "text-success font-weight-bold"
                            : "text-danger font-weight-bold"
                        }
                        id="nav-link"
                      >
                        {total}
                      </span>
                    </p>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="toggle"
                        variant=""
                        id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                      >
                        {/* <img src={profilepic} alt="profile" className="img" /> */}
                        <p id="nav-link" className="username">
                          Client
                        </p>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Row>
                          <Link
                            className="m-2"
                            to="/manager/addClientDetails"
                            id="nav-link"
                          >
                            Add Client details
                          </Link>
                          <Link
                            className="m-2"
                            to="/manager/addClientNames"
                            id="nav-link"
                          >
                            Add Client Names
                          </Link>
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* <Button
                      variant="link"
                      id="nav-link"
                      onClick={() => handleOnClick()}
                    >
                      Profile
                    </Button>
                    <Link
                      className="m-2"
                      to="/"
                      onClick={handlefunction}
                      id="nav-link"
                    >
                      Logout
                    </Link> */}
                  </>
                ) : ["lead"].includes(type) ? (
                  <>
                    <p className="total">
                      {total > 0 ? "Profit" : "Loss"} :
                      <nobr />
                      <span
                        className={
                          total > 0
                            ? "text-success font-weight-bold"
                            : "text-danger font-weight-bold"
                        }
                        id="nav-link"
                      >
                        {total}
                      </span>
                    </p>
                  </>
                ) : (
                  ""
                ))}
              <Dropdown>
                <Dropdown.Toggle
                  className="toggle"
                  variant=""
                  id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                >
                  {/* <img src={profilepic} alt="profile" className="img" /> */}
                  <p id="nav-link" className="username">
                    My profile
                  </p>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Row>
                    <Button
                      variant="link"
                      className="m-2"
                      id="nav-link"
                      onClick={() => handleOnClick()}
                    >
                      {user}
                    </Button>
                    <Link
                      className="m-2"
                      to="/"
                      onClick={handlefunction}
                      id="nav-link"
                    >
                      Logout
                    </Link>
                  </Row>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModelComponent
        data={id}
        // type={props.type}
        show={modalShow}
        // view={view}
        onHide={() => {
          setModalShow(false);
          // setData({});
        }}
      />
    </>
  );
}
