import React, {useState} from "react";
import ReactDOM from "react-dom";

import {TableCell} from "./component/TableCell";
import {TableCellLiftingUpStateData} from "./component/TableCellLiftingUpStateData";

let names = ["Bob", "Alice", "Dora"]

let namesStateToParent = ["Bob", "Alice", "Dora"]

function reverseNames() {
  names.reverse();
  ReactDOM.render(<App/>, document.getElementById('root'));
}

function promoteName(name) {
  names = [name, ...names.filter(val => val !== name)];
  ReactDOM.render(<App/>, document.getElementById('root'));
}

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (increment) => setCounter(counter + increment);

  return <React.StrictMode>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Rendering Multiple Elements
      </h1>
      <table className="table table-sm table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
        </thead>
        <tbody>
        {
          names.map(
            (name, index) =>
              <tr key={name}>
                <TableCell
                  index={index}
                  name={name}
                  reverseCallback={reverseNames}
                  promoteCallback={promoteName}/>
              </tr>
          )
        }
        </tbody>
      </table>
      )
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> State Data To Parent
      </h1>
      <table className="table table-sm table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
        </thead>
        <tbody>
        {
          names.map(
            (namesStateToParent, index) =>
              <tr key={namesStateToParent}>
                <TableCellLiftingUpStateData
                  index={index}
                  name={namesStateToParent}
                  reverseCallback={reverseNames}
                  promoteCallback={promoteName}
                  counter={counter}
                  incrementCallback={incrementCounter}/>
              </tr>
          )
        }
        </tbody>
      </table>
      )
    </div>
  </React.StrictMode>
}
