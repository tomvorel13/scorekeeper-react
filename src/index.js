import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

var PLAYERS = [
  {
    name: "Rip Hamilton",
    score: 32
  },
  {
    name: "Ben Wallace",
    score: 3
  },
  {
    name: "Tayshaun Prince",
    score: 22
  }
];

ReactDOM.render(
  <App initialPlayers={PLAYERS} />,
  document.getElementById("root")
);
registerServiceWorker();
