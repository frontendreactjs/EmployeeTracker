import React, { useState } from "react";
import { useEffect } from "react";
import Cards from "../../components/cards/Cards";

import ApiService from "../../services/ApiService";
import "./dashboard.css";
const Dashboard = () => {
  const [status, setStatus] = React.useState(false);
  const [employees, setEmployees] = React.useState([]);
  const [msg, setMsg] = useState("Loading....");
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
    <div className="cards-all">
      {status ? (
        employees.map((data, index) => <Cards key={index} data={data} />)
      ) : (
        <p className="text-danger mb-1">{msg}</p>
      )}
    </div>
  );
};

export default Dashboard;
