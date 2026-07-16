import React from "react";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";

function LayOut({ children }) {
  return (
    <div>
      <Header />
      <SubHeader /> 
      {children}
    </div>
  );
}
export default LayOut;