import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { About } from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Restmenu from "./components/Restmenu";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet/>
    </div>
  );
};
const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/rest/:resid",
        element:<Restmenu/>
      }
    ],
    errorElement:<Error/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
