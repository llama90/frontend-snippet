import React from "react";

export function TableCell(props) {
  return <React.Fragment>
    <td>{props.index + 1} </td>
    <td>{props.name} </td>
    <td>{props.name.length} </td>
  </React.Fragment>
}