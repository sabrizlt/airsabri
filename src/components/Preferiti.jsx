import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

function BasicExample() {

  return (
    <>
      <MyNavbar />

      <h1 className="text-center titleHome ticketTitle fw-bold">
        <span className="caption">PREFERITI</span>
      </h1>

      
        <MyFooter />
    </>
  );
}

export default BasicExample;
