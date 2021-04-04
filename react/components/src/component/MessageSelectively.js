import React from "react";

export function MessageSelectively(props) {
  if (props.name === "Bob") {
    return <h4 className="bg-warning p-2">{props.greeting}, {props.name}</h4>
  } else {
    return <h4 className="bg-success text-white text-center p-2"> {props.greeting}, {props.name}</h4>
  }
}