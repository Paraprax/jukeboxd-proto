import React from "react";
import { Tracklist } from "../TrackList/Tracklist.js";
import "./PlayList.css";

export class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <Tracklist tracks={this.props.playlistTracks} />
        <button className="Playlist-save">Save playlist to Spotify!</button>
      </div>
    );
  }
}
