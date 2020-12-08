import React, {Component} from "react";

export class SimpleButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      hasButtonBeenClicked: false
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}
              className={this.props.className}
              disabled={this.props.disabled === "true" || this.props.disabled === true}>
        {this.props.text}
        {this.state.counter}
        {this.state.hasButtonBeenClicked &&
        <div>Button Clicked!</div>
        }
      </button>)
  }

  handleClick = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((state, props) => {
        return {counter: state.counter + 1}
      });
    }
    this.setState({hasButtonBeenClicked: true});
    this.props.callback();
  }

  // Modify state data
  // handleClick = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //     hasButtonBeenClicked: true
  //   });
  //   this.props.callback();
  // }

  // Perform related state changes
  // handleClick = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //-     hasButtonBeenClicked: true
  //+     hasButtonBeenClicked: this.state.counter > 0
  //   });
  //   this.props.callback();
  // }

  // Make dependent updates
  // handleClick = () => {
  //-   counter: this.state.counter + 1,
  //-   hasButtonBeenClicked: this.state.counter > 0
  //+   this.setState({counter: this.state.counter + 1});
  //+   this.setState({hasButtonBeenClicked: this.state.counter > 0});
  //   this.props.callback();
  // }

  // Using a callback
  // handleClick = () => {
  //-   this.setState({counter: this.state.counter + 1});
  //-   this.setState({hasButtonBeenClicked: this.state.counter > 0});
  //+   this.setState({counter: this.state.counter + 1},
  //+     () => this.setState({hasButtonBeenClicked: this.state.counter > 0}));
  //   this.props.callback();
  // }

  // Make multiple updates: perform the effect of repeatedly modifying the same property
  // handleClick = () => {
  //   for (let i = 0; i < 5; i++) {
  //     this.setState({counter: this.state.counter + 1});
  //   }
  //   this.setState({hasButtonBeenClicked: true});
  //   this.props.callback();
  // }

  // Make multiple updates: perform multiple updates and have each take effect in sequence
  // handleClick = () => {
  //   for (let i = 0; i < 5; i++) {
  //     this.setState((state, props) => {return{counter: state.counter + 1}});
  //   }
  //   this.setState({hasButtonBeenClicked: true});
  //   this.props.callback();
  // }
}