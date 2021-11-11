import React from "react";
import { Track } from "../Track/Track.js";
import "./TrackList.css";

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {/* <!-- TODO: Render a set of track components using array mapping  --> */}
        <p>Orchestral Manoeuvers In The Dark - Enola Gay</p>
        <p>New Order - Crystal</p>
        <p>Vangelis - Blade Runner Blues</p>
      </div>
    );
  }
}
