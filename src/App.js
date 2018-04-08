import React, { Component } from 'react';
import EntryList from "./components/EntryList";
import WorstPlayers from "./components/WorstPlayers";
import CrimeRecord from "./components/CrimeRecord";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="stats">
              <h1>
                NFL crime statistics
              </h1>
              <h3>
                 NFL's most criminal team
              </h3>
              <EntryList />

              <h3>
                 TOP 5 NFL super criminals
              </h3>
              <WorstPlayers />
          </div>
          <div className="muggy">
              <h1> Worst NFL Criminal</h1>
            <img src="Muggy.jpg" />
          <CrimeRecord />
          </div>
      </div>
    );
  }
}

export default App;
