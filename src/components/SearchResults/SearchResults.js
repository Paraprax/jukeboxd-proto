import React from "react";
import { Tracklist } from "../TrackList/Tracklist.js";
import "./SearchResults.css";
import { App } from "../App/App.js";

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults" searchResults={this.state.searchResults}>
        <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
      </div>
    );
  }
}
