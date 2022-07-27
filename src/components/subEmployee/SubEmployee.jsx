import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ApiService from "../../services/ApiService";
import ModelComponent from "../model/ModelComponent";

export default function SubEmployee({ id }) {
  let type = sessionStorage.getItem("type");
  //   const [status, setStatus] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [viewEmployee, setViewEmployee] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [subEmp, setSubEmp] = useState(false);
  const [subEmpId, setSubEmpId] = useState("");

  const handleClick = (id) => {
    setSubEmpId(id);
    setSubEmp(true);
    setModalShow(true);
  };

  return (
    <div>
      <ModelComponent
        data={subEmpId}
        type={type}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
      <Button
        className="card-btn"
        onClick={(e) => {
          e.preventDefault();
          setViewEmployee(!viewEmployee);
          ApiService.getUnderEmployee(id)
            .then((res) => {
              console.log(res.data);
              setEmployee(res.data);
              setSubEmp(true);
            })
            .catch((err) => {
              console.log(err);
              setSubEmp(false);
            });
        }}
      >
        {viewEmployee ? "Hide" : "View Employees"}
      </Button>
      {viewEmployee &&
        ["manager", "general_manager", "ch", "md", "hr"].includes(type) && (
          <>
            {subEmp && employee?.length === 0 && (
              <span className="employees">
                <br />
                No Employees
              </span>
            )}
            {employee?.map((emp, index) => (
              <div key={index}>
                <span
                  className="employees"
                  onClick={() => handleClick(emp.empId)}
                >
                  {index + 1}.{" "}
                  <nobr>
                    {emp.firstName}
                    {emp.lastName}
                  </nobr>
                </span>

                <br />
              </div>
            ))}
          </>
        )}
    </div>
  );
}
