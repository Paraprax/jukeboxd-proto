import React from "react";
import "./Track.css";

export class Track extends React.Component {
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action">-</button>; //removal-button
    } else {
      return <button className="Track-action">+</button>; //adder-button
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {<h3>{this.props.track.name}</h3>}
          {
            <p>
              {this.props.track.artist} | {this.props.track.album}
            </p>
          }
        </div>
        {this.renderAction}
      </div>
    );
  }
}
