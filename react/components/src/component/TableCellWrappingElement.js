import React from "react";

export function TableCellWrappingElement(props) {
  return <>
    <td>{props.index + 1} </td>
    <td>{props.name} </td>
    <td>{props.name.length} </td>
  </>
}