import React, {Component} from "react";

let name = "Lucas";
const country = "Korea";

export default class extends Component {
  message = () => `Hello ${name} from ${country}`;

  render = () =>
    <h4 className="bg-primary text-white text-center p-3">
      {this.message()}
    </h4>
}