import React from "react";

import SimpleComponent from "./component/SimpleComponent";
import RenderHTML from "./component/RenderHTML";
import Parentheses from "./component/Parentheses";
import ArrowFunction from "./component/ArrowFunction";
import NamedAndDefaultExport from "./component/NamedAndDefaultExport";

import {Message} from "./component/Message";
import {Summary} from "./component/Summary";

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
      <Message/>
      <Message/>
      <Message/>
      <Summary/>
    </div>
  </React.StrictMode>
}

export default App;
