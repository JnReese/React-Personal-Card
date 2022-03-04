import React from "react";
import "./App.css";
import images from "./images/FBG.png";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={images} alt="background" />
      </div>
    );
  }
}

export default App;
