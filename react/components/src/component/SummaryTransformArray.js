import React from "react";

function createInnerElements(names) {
  return names.map(name =>
    <div>
      {`${name} contains ${name.length} letters`}
    </div>
  )
}

export function SummaryTransformArray(props) {
  return <h4 className="bg-info text-white text-center p-2">
    {createInnerElements(props.names)}
  </h4>
}