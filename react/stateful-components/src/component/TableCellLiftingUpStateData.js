import React, {Component} from "react";
import {SimpleButtonLiftingUpStateData} from "./SimpleButtonLiftingUpStateData";
import {HooksButtonLiftingUpStateData} from "./HooksButtonLiftingUpStateData";

export class TableCellLiftingUpStateData extends Component {

  render() {
    const props = this.props;
    return (<React.Fragment>
      <td>{props.index + 1} </td>
      <td>{props.name} </td>
      <td>{props.name.length} </td>
      <td>
        <SimpleButtonLiftingUpStateData
          className="btn btn-warning btn-sm m-1"
          callback={props.reverseCallback}
          text={`Reverse (${props.name})`}
          {...this.props}
        />
        <HooksButtonLiftingUpStateData
          className="btn btn-info btn-sm m-1"
          callback={() => props.promoteCallback(props.name)}
          text={`Promote (${props.name})`}
          {...this.props}
        />
      </td>
    </React.Fragment>)
  }
}