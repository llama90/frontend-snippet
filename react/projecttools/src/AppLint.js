/* eslint-disable no-unused-vars */
// or
/* eslint-disable */
import React, {Component} from "react";
import "./App.css";
import reactLogo from "./logo.svg";

// eslint-disable-next-line no-unused-vars
// or
// eslint-disable-next-line
let error = "not a valid statement";

export default class extends Component {
  message = () => `To understand eslint`;

  render = () =>
    <div className="text-center">
      <h4 className="bg-primary text-white text-center p-3">
        {this.message()}
      </h4>
      <img src={reactLogo} alt="reactLogo"/>
      <link rel="stylesheet"
            href={process.env.PUBLIC_URL + "/static.css"}/>
      <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="reactLogo"/>
    </div>
}