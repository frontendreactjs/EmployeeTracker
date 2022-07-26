import React, { useEffect } from "react";
import Cards from "../../components/cards/Cards";

import ApiService from "../../services/ApiService";

function Manager() {
  const [status, setStatus] = React.useState(false);
  const [employees, setEmployees] = React.useState([]);
  const [msg, setMsg] = React.useState("Loading....");
  useEffect(() => {
    setStatus(false);
    // eslint-disable-line

    ApiService.getAllEmployees()
      .then((res) => {
        // console.log(res.data);
        setEmployees(res.data);
        setStatus(true);
      })
      .catch((err) => {
        setStatus(false);
        console.log(err);
        setMsg(err.message);
      });
  }, []);

  return (
    <div className="lead">
      {status ? (
        employees.map((employee, index) => (
          <Cards
            key={index}
            data={employee}
            button="View profile"
            button2="View Employees"
            type="manager"
          />
        ))
      ) : (
        <p className="text-danger mb-1">{msg}</p>
      )}
    </div>
  );
}

export default Manager;
