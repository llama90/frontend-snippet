import React from "react";

import SimpleComponent from "./component/SimpleComponent";
import RenderHTML from "./component/RenderHTML";
import Parentheses from "./component/Parentheses";
import ArrowFunction from "./component/ArrowFunction";
import NamedAndDefaultExport from "./component/NamedAndDefaultExport";

import {Message} from "./component/Message";
import {MessageSelectively} from "./component/MessageSelectively";
import {MessageSelectiveProperty} from "./component/MessageSelectiveProperty";
import {MessageSwitchStatement} from "./component/MessageSwitchStatement";

import {Summary} from "./component/Summary";
import {SummaryArrayRendering} from "./component/SummaryArrayRendering";
import {SummaryTransformArray} from "./component/SummaryTransformArray";
import {SummaryTransformArraySimplifying} from "./component/SummaryTransformArraySimplifying";
import {SummaryKeyProp} from "./component/SummaryKeyProp";

import {TableCell} from "./component/TableCell";
import {TableCellWrappingElement} from "./component/TableCellWrappingElement";
import {TableCellNoContents} from "./component/TableCellNoContents";

let names = ["Bob", "Alice", "Dora"]

function App() {
  return <React.StrictMode>
    <SimpleComponent/>
    <RenderHTML/>
    <Parentheses/>
    <ArrowFunction/>
    <NamedAndDefaultExport/>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Rendering Other Component
      </h1>
      <Message greeting="Hello" name="Bob"/>
      <Message greeting="Hola" name={"Alice" + "Smith"}/>
      <Message greeting="Hi there" name="Dora"/>
      <Summary/>
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Selectively Rendering
      </h1>
      <MessageSelectively greeting="Hello" name="Bob"/>
      <MessageSelectively greeting="Hola" name={"Alice" + "Smith"}/>
      <MessageSelectively greeting="Hi there" name="Dora"/>
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Selecting a Property Value
      </h1>
      <MessageSelectiveProperty greeting="Hello" name="Bob"/>
      <MessageSelectiveProperty greeting="Hola" name={"Alice" + "Smith"}/>
      <MessageSelectiveProperty greeting="Hi there" name="Dora"/>
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Using a switch Statement
      </h1>
      <MessageSwitchStatement greeting="Hello" name="Bob"/>
      <MessageSwitchStatement greeting="Hola" name={"Alice" + "Smith"}/>
      <MessageSwitchStatement greeting="Hi there" name="Dora"/>
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Rendering Array
      </h1>
      <SummaryArrayRendering names={["Bob", "Alice", "Dora"]}/>
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Transforming an Array
      </h1>
      <SummaryTransformArray names={["Bob", "Alice", "Dora"]}/>
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Transforming an Array Simplifying
      </h1>
      <SummaryTransformArraySimplifying names={["Bob", "Alice", "Dora"]}/>
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Adding the Key Prop
      </h1>
      <SummaryKeyProp names={["Bob", "Alice", "Dora"]}/>
    </div>
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
          names.map((name, index) => <tr key={name}><TableCell index={index} name={name}/></tr>)
        }
        </tbody>
      </table>
      )
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Rendering Multiple Elements (Wrapping Element)
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
          names.map((name, index) => <tr key={name}><TableCellWrappingElement index={index} name={name}/></tr>)
        }
        </tbody>
      </table>
      )
    </div>
    <div>
      <h1 className="bg-primary text-white text-center p-2"> Rendering Multiple Elements (No Contents)
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
          names.map((name, index) => <tr key={name}><TableCellNoContents index={index} name={name}/></tr>)
        }
        </tbody>
      </table>
      )
    </div>
  </React.StrictMode>
}

export default App;
