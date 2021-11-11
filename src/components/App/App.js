import React from "react";
import { SearchResults } from "../SearchResults/SearchResults";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{ name: "trackname", artist: "trackartist", album: "trackalbum", id: "trackId" }],
    };
  }

  render() {
    return (
      <div>
        <h1>Jukeboxd</h1>
        <div className="App">
          {/* <!-- TODO: Add a SearchBar component --> */}
          <div className="App-playlist">
            {
              <SearchResults searchResults={this.state.searchResults} />
              /* <!-- TODO: Add a Playlist component --> */
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
