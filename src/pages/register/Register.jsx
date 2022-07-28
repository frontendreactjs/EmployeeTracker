import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FormInputs } from "../../components/formInputs/FormInputs";
import ApiService from "../../services/ApiService";

function Register() {
  const [data, setData] = useState({});
  const [roles, setRoles] = useState(null);
  const [status, setStatus] = useState(false);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();

  const formData = [
    {
      id: "firstName",
      title: "Employee first name",
      name: "firstName",
      type: "text",
      placeholder: "Enter Employee first name",
      required: true,
      defaultValue: data.firstName,
      handleChange: handleChange,
    },
    {
      id: "lastName",
      title: "Employee last name",
      name: "lastName",
      type: "text",
      placeholder: "Enter Employee last name",
      required: true,
      defaultValue: data.lastName,
      handleChange: handleChange,
    },

    {
      id: "email",
      title: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      required: true,
      defaultValue: data.email,
      handleChange: handleChange,
    },
    {
      id: "password",
      title: "password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
      required: true,
      defaultValue: data.password,
      handleChange: handleChange,
    },
    {
      id: "phoneNo",
      title: "Phone number",
      name: "phoneNo",
      type: "phoneNo",
      placeholder: "Enter phone number",
      required: true,
      defaultValue: data.phoneNo,
      handleChange: handleChange,
    },
    {
      id: "username",
      title: "username",
      name: "username",
      type: "username",
      placeholder: "Enter username",
      required: true,
      defaultValue: data.username,
      handleChange: handleChange,
    },
    {
      id: "role",
      data: (
        <Form.Group className="mb-3 px-2">
          <Form.Label htmlFor="role">Role</Form.Label>
          <Form.Select
            required
            id="role"
            aria-label="role"
            className="selectInput"
            name="role"
            onChange={handleChange}
          >
            <option value="">{status ? "loading" : "select "}</option>
            {/* <option value="1">N/A</option> */}
            {roles?.map((type) => (
              <option key={type.roleName} value={type.roleName}>
                {type.roleName}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      ),
    },
  ];
  useEffect(() => {
    ApiService.getAllRoles()
      .then((res) => {
        console.log(res.data);
        setRoles(res.data);
        setStatus(false);
        setErrors(false);
        setMsg("");
      })
      .catch((error) => {
        console.log(error);
        setRoles(null);
        setStatus(false);
        setErrors(true);
        setMsg(error.message);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.signup(data, data.role)
      .then((res) => {
        console.log(res);
        navigate("/hr");
        setStatus(true);
        setMsg("");
      })
      .catch((error) => {
        console.log(error);
        setStatus(false);
        setErrors(true);
        setMsg(error.response.data.errormessage);
      });
    console.log(data);
  };

  return (
    <div id="add-employee" className="container-sm ">
      <h1 className="title text-center">Create your account</h1>
      <Form onSubmit={handleSubmit}>
        <div className="form">
          {formData.map((item) => (
            <Fragment key={item.id}>
              {item?.data ? (
                item.data
              ) : (
                <FormInputs
                  id={item.id}
                  title={item.title}
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  required={item.required}
                  defaultValue={item.defaultValue}
                  handleChange={item.handleChange}
                  pattern={item.pattern}
                  message={item.message}
                />
              )}
            </Fragment>
          ))}
        </div>
        <Button className="btn-signup px-2" type="submit">
          Submit
        </Button>{" "}
        <Button as={Link} to="/hr" variant="danger" className="px-2">
          Cancel
        </Button>
        {/* </Col> */}
        {status && (
          <p className="text-success mb-2">
            Please wait while we are processing your request.
          </p>
        )}
        {/* {errors && (
            <p className="text-danger mb-2">
              Network error. Please try again later.
            </p>
          )} */}
        {<p className="text-danger mb-2">{msg}</p>}
      </Form>
    </div>
  );
}

export default Register;
