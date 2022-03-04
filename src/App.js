import React from "react";
import "./App.css";
import images from "./images/FBG.png";
import MainPhoto from "./MainPhoto";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <MainPhoto />
      </div>
    );
  }
}

export default App;
