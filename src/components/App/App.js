import React from "react";
import { SearchResults } from "../SearchResults/SearchResults";
import { PlayList } from "../PlayList/PlayList.js";
import { SearchBar } from "../SearchBar/SearchBar.js";
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "trackname1", artist: "trackartist1", album: "trackalbum1", id: "1" },
        { name: "trackname2", artist: "trackartist2", album: "trackalbum2", id: "2" },
        { name: "trackname3", artist: "trackartist3", album: "trackalbum3", id: "3" },
      ],
      playlistName: "Surf Rock",
      playlistTracks: [
        { name: "Surf's Up", artist: "The Benihanas", album: "Coconut Bay", id: "1" },
        { name: "Shore Leave", artist: "The AWOLs", album: "Going AWOL", id: "2" },
        { name: "Blue Hawaii", artist: "Elvis Presley", album: "Blue Hawaii", id: "3" },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renamePlaylist = this.renamePlaylist.bind(this);
  }

  addTrack(track) {
    let tracksArray = track.state.playlistTracks;
    if (tracksArray.find((alreadySaved) => alreadySaved.id === track.id)) {
      return;
    } else {
      tracksArray.push(track);
      this.setState({ playlistTracks: tracksArray });
    }
  }

  removeTrack(track) {
    let currentPlaylistTracks = this.state.playlistTracks;
    currentPlaylistTracks = this.state.playlistTracks.filter((targetTrack) => targetTrack.id !== track.id);
    this.setState({ playlistTracks: currentPlaylistTracks });
  }

  renamePlaylist(newName) {
    this.setState({ playlistName: newName });
  }

  render() {
    return (
      <div>
        <h1>Jukeboxd</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <PlayList playlist={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.renamePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}
