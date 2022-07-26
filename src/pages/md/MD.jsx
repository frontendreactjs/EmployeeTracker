import React from "react";
import Cards from "../../components/cards/Cards";

function MD() {
  const employee = [
    {
      id: 1,
      employeeId: "",
      employeeName: "",
      button: "View profile",
      button2: "View Employees",
    },
    {
      id: 2,
      employeeId: "",
      employeeName: "",
      button: "View profile",
      button2: "View Employees",
    },
  ];
  return (
    <>
      {employee.map((employee) => (
        <Cards key={employee.id} data={employee} type="md" />
      ))}
    </>
  );
}

export default MD;
