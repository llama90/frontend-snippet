import React, {Component} from 'react';
import {Message} from "./component/Message";
import {ActionButton} from './component/ActionButton';
import {ThemeSelector} from './component/ThemeSelector';
import {GeneralList} from './component/GeneralList';
import {SortedList} from "./component/SortedList";
import {ProFeature} from "./component/ProFeature";
import {ProController} from "./component/ProController";
import {LogToConsole} from "./component/LogToConsole";

const ProList = ProFeature(SortedList);
const ProControllerList = ProController(LogToConsole(SortedList, "Sorted", true, true, true));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
      cities: ["London", "New York", "Paris", "Milan", "Boston"],
      proMode: false
    }
  }

  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1});
  }

  toggleProMode = () => {
    this.setState({proMode: !this.state.proMode});
  }

  render() {
    return <div className="m-2 text-center">
      <ThemeSelector>
        <Message theme="primary" message={`Counter: ${this.state.counter}`}/>
        <ActionButton theme="secondary" text="Increment" callback={this.incrementCounter}/>
      </ThemeSelector>
      <div className="container-fluid m-2">
        <div className="row">
          <div className="col-12 text-center p-2">
            <div className="form-check">
              <input type="checkbox" className="form-check-input"
                     value={this.state.proMode}
                     onChange={this.toggleProMode}/>
              <label className="form-check-label">Pro Mode</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <GeneralList list={this.state.names} theme="primary"/>
          </div>
          <div className="col-3">
            <ProList list={this.state.names}
                     pro={this.state.proMode}/>
          </div>
          <div className="col-3">
            <GeneralList list={this.state.cities} theme="secondary"/>
          </div>
          <div className="col-3">
            <ProList list={this.state.cities}
                     pro={this.state.proMode}/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <GeneralList list={this.state.names} theme="primary"/>
        </div>
        <div className="col-3">
          <ProControllerList list={this.state.names}/>
        </div>
        <div className="col-3">
          <GeneralList list={this.state.cities} theme="secondary"/>
        </div>
        <div className="col-3">
          <ProControllerList list={this.state.cities}/>
        </div>
      </div>
    </div>
  }
}