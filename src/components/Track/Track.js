import React from "react";
import './Track.css';

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
          {/* <h3><!-- TODO: render track name --></h3> */}
          {/* <p><!-- TODO: render artist name --> | <!-- TODO: render album name --></p> */}
        </div>
        {this.renderAction}
      </div>
    );
  }
}
