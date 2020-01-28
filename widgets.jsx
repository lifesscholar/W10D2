import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock.jsx';
import Tabs from "./frontend/tabs.jsx";
const thing = [{title:"1", content:"this is 1"},  {title:"2", content:"this is 2"}];

function App() {
  return (
    <>
      <Clock/>
      < Tabs tab={thing} name="hello"/>
    </>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const start = React.createElement("h1", null, ["This is the beginning"]);
  ReactDOM.render(<App/>, root);
});
