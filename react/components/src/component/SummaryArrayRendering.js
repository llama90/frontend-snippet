import React from "react";

function createInnerElements(names) {
  let arrayElems = [];
  for (let i = 0; i < names.length; i++) {
    arrayElems.push(<div>
      {`${names[i]} contains ${names[i].length} letters`} </div>
    )
  }
  return arrayElems;
}

export function SummaryArrayRendering(props) {
  return <h4 className="bg-info text-white text-center p-2">
    {createInnerElements(props.names)}
  </h4>
}