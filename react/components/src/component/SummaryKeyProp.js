import React from "react";

export function SummaryKeyProp(props) {
  return (
    <h4 className="bg-info text-white text-center p-2">
      {
        props.names.map(name =>
          <div key={name}>{`${name} contains ${name.length} letters`} </div>
        )
      }
    </h4>
  )
}