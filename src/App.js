import React from "react";
import "./App.css";
import MainPhoto from "./MainPhoto";
import NameTag from "./NameTag";
import SocialButtons from "./SocialButtons";
import AboutMe from "./AboutMe";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <MainPhoto />
        <NameTag />
        <SocialButtons />
        <AboutMe />
      </div>
    );
  }
}

export default App;
