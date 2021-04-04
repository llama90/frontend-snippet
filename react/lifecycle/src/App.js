import React, {Component} from 'react';
import {Message} from "./component/Message";
import {HooksMessage} from "./component/HooksMessage";
import {List} from "./component/List";
import {ExternalCounter} from './component/ExternalCounter';
import {DirectionDisplay} from './component/DirectionDisplay';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showMessage: true
    }
  }

  changeCounter = (val) => {
    this.setState({counter: this.state.counter + val})
  }

  incrementCounter = (counter) => {
    if (counter === "left") {
      this.setState({counterLeft: this.state.counterLeft + 1});
    } else {
      this.setState({counterRight: this.state.counterRight + 1});
    }
  }

  handleChange = () => {
    this.setState({showMessage: !this.state.showMessage});
  }

  render() {
    console.log("Render App Component");
    return <div className="container text-center">
      <div className="row p-2">
        <div className="col-4">
          <div className="form-check">
            <input type="checkbox" className="form-check-input"
                   checked={this.state.showMessage}
                   onChange={this.handleChange}/>
            <label className="form-check-label">Show</label>
          </div>
          {
            this.state.showMessage &&
            <div>
              <Message message={`Counter: ${this.state.counter}`}
                       callback={this.incrementCounter}
                       text="Increment Counter"/>
              <HooksMessage
                message={`Counter: ${this.state.counter}`}
                callback={this.incrementCounter}
                text="Increment Counter"/>
            </div>
          }
        </div>
        <div className="col-4">
          <List/>
        </div>
        <div className="col-4">
          <ExternalCounter/>
        </div>
      </div>

      <div className="row p-2">
        <div className="col-6">
          <Message
            message={`Left: ${this.state.counterLeft}`}
            callback={() => this.incrementCounter("left")}
            text="Increment Left Counter"/>
        </div>
        <div className="col-6">
          <Message
            message={`Right: ${this.state.counterRight}`}
            callback={() => this.incrementCounter("right")}
            text="Increment Right Counter"/>d
        </div>
      </div>

      <div className="row p-2">
        <div className="container text-center">
          <DirectionDisplay value={this.state.counter}/>
          <div className="text-center">
            <button className="btn btn-primary m-1" onClick={() => this.changeCounter(-1)}>Decrease</button>
            <button className="btn btn-primary m-1" onClick={() => this.changeCounter(1)}>Increase</button>
          </div>
        </div>
      </div>

    </div>
  }
}
