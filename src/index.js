import ReactDOM from "react-dom/client"
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
{
  path:"/",
  element:<Home />,
},
{
  path:"/about",
  element: <About/>,
},
{
  path:"/contact",
  element:<Contact/>,
},
]);

root.render(<RouterProvider router={router} />);
