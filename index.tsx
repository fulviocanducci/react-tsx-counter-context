import React from "react";
import CounterProvider from "./Counter";
import { render } from "react-dom";
import Panel from "./Panel";
import Score from "./Score";

function App() {
  return (
    <div>
      <Panel />
      <Score />
    </div>
  );
}

render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById("root")
);
