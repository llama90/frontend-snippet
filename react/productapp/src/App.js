import React, {Component} from "react";
import {Provider} from "react-redux";
import dataStore from "./store";
import {Selector} from "./component/Selector";
import {ProductDisplay} from "./component/ProductDisplay";
import {SupplierDisplay} from "./component/SupplierDisplay";

export default class App extends Component {
  render() {
    return <Provider store={dataStore}>
      <Selector>
        <ProductDisplay name="Products"/>
        <SupplierDisplay name="Suppliers"/>
      </Selector>
    </Provider>
  }
}