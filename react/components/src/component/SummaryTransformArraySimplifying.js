import React from "react";

export function SummaryTransformArraySimplifying(props) {
  return (
    <h4 className="bg-info text-white text-center p-2">
      {
        props.names.map(name => <div>
          {`${name} contains ${name.length} letters`} </div>
        )
      }
    </h4>
  )
}