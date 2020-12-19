import React, {Component} from "react";

export class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Bob",
      selectElementFlavor: "Vanilla",
      toppings: ["Strawberries"],
      radioButtonFlavor: "Vanilla"
    }

    this.selectedElementFlavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
    this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
    this.radioButtonFlavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
  }

  updateFormValue = (event) => {
    this.setState({[event.target.name]: event.target.value},
      () => this.props.submit(this.state));
  }

  updateFormValueOptions = (event) => {
    let options = [...event.target.options]
      .filter(o => o.selected).map(o => o.value);
    this.setState({[event.target.name]: options},
      () => this.props.submit(this.state));
  }

  render() {
    return <div className="h5 bg-info text-white p-2">
      <div className="form-group">
        <label>Name</label>
        <input className="form-control" name="name" value={this.state.name} onChange={this.updateFormValue}/>
      </div>
      <div className="form-group">
        <label>Ice Cream Flavors</label>
        <select className="form-control" name="selectElementFlavor" value={this.state.selectElementFlavor} onChange={this.updateFormValue}>
          {this.selectedElementFlavors.map(selectedElementFlavor =>
            <option value={selectedElementFlavor} key={selectedElementFlavor}>
              {selectedElementFlavor}
            </option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Ice Cream Toppings</label>
        <select className="form-control" multiple={true} name="toppings" value={this.state.toppings} onChange={this.updateFormValueOptions}>
          {this.toppings.map(top =>
            <option value={top} key={top}>
              {top}
            </option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Ice Cream Flavors</label>
        {this.radioButtonFlavors.map(flavor =>
          <div className="form-check" key={flavor}>
            <input className="form-check-input" type="radio" name="radioButtonFlavor" value={flavor} checked={this.state.radioButtonFlavor === flavor} onChange={this.updateFormValue}/>
            <label className="form-check-label">
              {flavor}
            </label>
          </div>
        )}
      </div>
    </div>
  }
}