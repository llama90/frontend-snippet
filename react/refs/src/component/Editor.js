import React, {Component} from "react";

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.formElements = {
      name: {label: "Name", name: "name"},
      category: {label: "Category", name: "category"},
      price: {label: "Price", name: "price"}
    }
  }

  setElement = (element) => {
    if (element !== null) {
      this.formElements[element.name].element = element;
    }
  }

  handleAdd = () => {
    let data = {};
    Object.values(this.formElements)
      .forEach(v => {
        data[v.element.name] = v.element.value;
        v.element.value = "";
      });
    this.props.callback(data);
    this.formElements.name.element.focus();
  }

  render() {
    return <React.Fragment>
      {
        Object.values(this.formElements).map(elem =>
          <div className="form-group p-2" key={elem.name}>
            <label>{elem.label}</label>
            <input className="form-control" name={elem.name} autoFocus={elem.name === "name"} ref={this.setElement}/>
          </div>
        )
      }
      <div className="text-center">
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
      </div>
    </React.Fragment>
  }
}