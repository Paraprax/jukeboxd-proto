import React from "react";
import { Tracklist } from ".Tracklist";

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
