import React from "react";
import ReactDOM from "react-dom/client"
import Nav from "./components/Nav";
import Body from "./components/Body";
const App=()=>{
  return (
    <div className="App">
      <Nav/>
      <Body/>
    </div>
  );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<App/>)
