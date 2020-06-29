import React from "react";
import "./App.css";

import Main from "./components/Main";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Menu />
      </div>
      <div className="Main">
        <Main>Video</Main>
      </div>
    </div>
  );
}

export default App;
