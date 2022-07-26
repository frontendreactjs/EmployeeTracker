import React, { useEffect } from "react";
import Cards from "../../components/cards/Cards";
// import Header from "../../components/header/Header";
import ApiService from "../../services/ApiService";
import "./lead.css";
function Lead() {
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
        employees.map((employee) => <Cards key={employee.id} data={employee} />)
      ) : (
        <p className="text-danger mb-1">{msg}</p>
      )}
      {/* {employees.map((employee) => (
          <Cards key={employee.empId} data={employee} />
        ))} */}
    </div>
  );
}

export default Lead;
