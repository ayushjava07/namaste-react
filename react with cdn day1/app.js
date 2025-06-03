const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "kaise ho mitar"),
    React.createElement("h2 ", { id: "heading" }, "kaise ho mitar2")],


  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
