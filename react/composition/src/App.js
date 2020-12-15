import React, {Component} from 'react';
import {Message} from "./component/Message";
import {ActionButton} from './component/ActionButton';
import {ThemeSelector} from './component/ThemeSelector';
import {GeneralList} from './component/GeneralList';
import {SortedList} from "./component/SortedList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      names: ["Zoe", "Bob", "Alice", "Dora", "Joe"]
    }
  }

  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return <div className="m-2 text-center">
      <ThemeSelector>
        <Message theme="primary" message={`Counter: ${this.state.counter}`}/>
        <ActionButton theme="secondary" text="Increment" callback={this.incrementCounter}/>
      </ThemeSelector>
      <div className="container-fluid m-2">
        <div className="row">
          <div className="col-6">
            <GeneralList list={this.state.names} theme="primary"/>
          </div>
          <div className="col-6">
            <SortedList list={this.state.names}/>
          </div>
        </div>
      </div>
    </div>
  }
}