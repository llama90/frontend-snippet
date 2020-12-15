import React, {Component} from 'react';
import {Message} from "./component/Message";
import {ActionButton} from './component/ActionButton';
import {ThemeSelector} from './component/ThemeSelector';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
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
    </div>
  }
}