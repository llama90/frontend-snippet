import React, {Component} from 'react';
import {ThemeButton} from "./component/ThemeButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Ready",
      messageWithCustomArgument: "Ready",
      counter: 0,
      theme: "secondary"
    }
  }

  selectTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
      message: `Theme: ${newTheme}`
    });
  }

  handleEvent = () => {
    this.setState({message: "Ready"});
  }

  handleEventType = (event) => {
    this.setState({message: `Event: ${event.type} `});
  }

  handleEventTypeCheck = (event) => {
    if (event.type === "mousedown") {
      this.setState({message: "Down"});
    } else {
      this.setState({message: "Up"});
    }
  }

  handleEventAvoidPitfall = (event) => {
    event.persist();
    this.setState({counter: this.state.counter + 1},
      () => this.setState({message: `${event.type}: ${this.state.counter}`}));
  }

  handleEventCustomArgument = (event) => {
    event.persist();
    this.setState({
      counter: this.state.counter + 1,
      theme: event.target.innerText === "Normal" ? "primary" : "danger"
    }, () => this.setState({messageWithCustomArgument: `${event.type}: ${this.state.counter}`}));
  }

  toggleCheckBox = (event) => {
    if (this.state.counter === 0) {
      event.preventDefault();
    }
  }

  handleClick = (event) => {
    console.log(`App: Type: ${event.type} `
      + `Target: ${event.target.tagName} `
      + `CurrentTarget: ${event.currentTarget.tagName}`);
  }

  render() {
    return (
      <div className="m-2">
        <div className="h4 bg-primary text-white text-center p-2">
          {this.state.message} </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={() => this.setState({message: "Clicked!"})}>
            Click Me
          </button>

          <button className="btn btn-primary" onClick={this.handleEvent}>
            Click Me (ready)
          </button>

          <button className="btn btn-primary" onClick={this.handleEventType}>
            Click Me (type)
          </button>

          <button className="btn btn-primary"
                  onMouseDown={this.handleEventTypeCheck}
                  onMouseUp={this.handleEventTypeCheck}>
            Click Me (type check)
          </button>

          <button className="btn btn-primary"
                  onClick={this.handleEventAvoidPitfall}>
            Click Me(avoid pitfall)
          </button>
        </div>

        <div className="m-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" onClick={this.toggleCheckBox}/>
            <label>This is a checkbox</label>
          </div>
          <div className={`h4 bg-${this.state.theme} text-white text-center p-2`}>
            {this.state.messageWithCustomArgument} </div>
          <div className="text-center">
            <button className="btn btn-primary" onClick={this.handleEventCustomArgument}>Normal</button>
            <button className="btn btn-danger m-1" onClick={this.handleEventCustomArgument}>Danger</button>
          </div>
        </div>

        <div className="m-2" onClick={this.handleClick}>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" onClick={this.toggleCheckBox}/>
            <label>This is a checkbox</label>
          </div>
          <div className={`h4 bg-${this.state.theme} text-white text-center p-2`}>
            {this.state.messageWithCustomArgument} </div>
          <div className="text-center" onClick={this.handleClick}>
            <ThemeButton theme="primary" callback={this.selectTheme}/>
            <ThemeButton theme="danger" callback={this.selectTheme}/>
          </div>
        </div>

      </div>

    )
  }
}