import React from "react";
import {Alert} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WarningSign = (props) => {
  return <Alert variant={props.color}>{props.text}</Alert>;
};

export default WarningSign;
