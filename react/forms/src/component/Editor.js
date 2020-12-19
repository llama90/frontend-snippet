import React, {Component} from "react";

export class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Bob",
      selectElementFlavor: "Vanilla",
      selectElementToppings: ["Strawberries"],
      radioButtonFlavor: "Vanilla",
      twoScoops: false,
      checkBoxToppings: ["Strawberries"]
    }

    this.selectedElementFlavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
    this.selectElementToppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
    this.radioButtonFlavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
    this.checkBoxToppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
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

  updateFormValueCheck = (event) => {
    this.setState({ [event.target.name]: event.target.checked },
      () => this.props.submit(this.state));
  }

  updateFormValueCheckBoxes = (event) => {
    event.persist();
    this.setState(state => {
      if (event.target.checked) {
        state.checkBoxToppings.push(event.target.name);
      } else {
        let index = state.checkBoxToppings.indexOf(event.target.name);
        state.checkBoxToppings.splice(index, 1);
      }
    }, () => this.props.submit(this.state));
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
        <select className="form-control" multiple={true} name="selectElementToppings" value={this.state.selectElementToppings} onChange={this.updateFormValueOptions}>
          {this.selectElementToppings.map(top =>
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

      <div className="form-group">
        <div className="form-check"><input className="form-check-input" type="checkbox" name="twoScoops" checked={this.state.twoScoops} onChange={this.updateFormValueCheck}/>
          <label className="form-check-label">Two Scoops</label>
        </div>
      </div>

      <div className="form-group">
        <label>Ice Cream Toppings</label>
        {this.checkBoxToppings.map(top =>
          <div className="form-check" key={top}>
            <input className="form-check-input" type="checkbox" name={top} value={this.state[top]} checked={this.state.checkBoxToppings.indexOf(top) > -1} onChange={this.updateFormValueCheckBoxes}/>
            <label className="form-check-label">{top}</label>
          </div>
        )} </div>

    </div>
  }
}