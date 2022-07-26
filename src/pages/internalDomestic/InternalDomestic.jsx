import React from "react";
import Expences from "../../components/expences/Expences";
// import Header from "../../components/header/Header";

function InternalDomestic() {
  return (
    // <>
    //   <Header type="finance" />
    <div id="add-employee" className="container-sm ">
      <h1 className="title text-center">Internal Domestic Expences</h1>
      <Expences type="3" />
    </div>
    // </>
  );
}

export default InternalDomestic;
