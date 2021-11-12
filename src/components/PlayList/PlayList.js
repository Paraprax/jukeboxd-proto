import React from "react";
import { TrackList } from "../TrackList/TrackList.js";
import "./PlayList.css";

export class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
        <button className="Playlist-save">Save playlist to Spotify!</button>
      </div>
    );
  }
}
