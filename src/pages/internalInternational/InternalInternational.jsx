import React from "react";
import Expences from "../../components/expences/Expences";
import Header from "../../components/header/Header";

function InternalInternational() {
  return (
    <>
      <Header type="finance" />
      <div id="add-employee" className="container-sm ">
        <h1 className="title text-center">Internal International Expences</h1>
        <Expences type="4" />
      </div>
    </>
  );
}

export default InternalInternational;
