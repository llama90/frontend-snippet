import React from "react";
import ReactDOM from "react-dom";

import {TableCell} from "./component/TableCell";

let names = ["Bob", "Alice", "Dora"]

function reverseNames() {
  names.reverse();
  ReactDOM.render(<App/>, document.getElementById('root'));
}

function promoteName(name) {
  names = [name, ...names.filter(val => val !== name)];
  ReactDOM.render(<App/>, document.getElementById('root'));
}

function App() {
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
  </React.StrictMode>
}

export default App;
