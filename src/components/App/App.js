import React from "react";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../PlayList/PlayList.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{ name: "trackname", artist: "trackartist", album: "trackalbum", id: "trackId" }],
      playlistName: "Surf Rock",
      playlistTracks: [
        { name: "Surf's Up", artist: "The Benihanas", album: "Coconut Bay", id: "1" },
        { name: "Shore Leave", artist: "The AWOLs", album: "Going AWOL", id: "2" },
        { name: "Blue Hawaii", artist: "Elvis Presley", album: "Blue Hawaii", id: "3" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Jukeboxd</h1>
        <div className="App">
          {/* <!-- TODO: Add a SearchBar component --> */}
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlist={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
