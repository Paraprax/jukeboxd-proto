import React from "react";

export class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Search for songs, artists or albums...." />
        <button className="SearchButton">Ayyyy</button>
      </div>
    );
  }
}
