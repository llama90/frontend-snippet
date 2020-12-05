import React, {Component} from "react";

export default class extends Component {
  render = () => React.createElement("h4",
    { className: "bg-primary text-white text-center p-3" },
    "This is an HTML element using the React API")
}