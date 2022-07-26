import React, { useState } from "react";
import { Button, Container, Dropdown, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import lancesoft_logo from "../../lancesoft_logo.png";
import ModelComponent from "../model/ModelComponent";
import "./header.css";
export default function Header() {
  let type = sessionStorage.getItem("type");
  let navPath = `/${type}`;
  // console.log(type);
  let id = sessionStorage.getItem("Id");
  const [modalShow, setModalShow] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem("Access_Token"));
  // const username = sessionStorage.getItem("username");
  const handlefunction = () => {
    sessionStorage.clear();
    alert(`Logout Successful`);
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
                          <Link
                            className="m-2"
                            to="/hr/addEmployee"
                            id="nav-link"
                          >
                            Add Employee
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
                    <Button
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
                    </Link>
                  </>
                ) : ["md", "general_manager", "ch"].includes(type) ? (
                  <>
                    <p>Total</p>
                    {/* <Link className="m-2" to="/" id="nav-link">
                      Approve
                    </Link> */}
                    <Button
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
                    </Link>
                  </>
                ) : ["manager"].includes(type) ? (
                  <>
                    <p as={Link} id="nav-link">
                      Total
                    </p>
                    <Link
                      className="m-2"
                      to="/manager/addClientDetails"
                      id="nav-link"
                    >
                      Add Client details
                    </Link>
                    <Button
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
                    </Link>
                  </>
                ) : ["lead"].includes(type) ? (
                  <>
                    <p>Total</p>
                    <Button
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
                    </Link>
                  </>
                ) : (
                  ""
                ))}
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
