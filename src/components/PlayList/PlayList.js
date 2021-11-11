import React from "react";
import { Tracklist } from "../TrackList/Tracklist.js";
import "./PlayList.css";

export class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        {/* <!-- Add a TrackList component --> */}
        <button className="Playlist-save">Save playlist to Spotify!</button>
      </div>
    );
  }
}
