import ReactDOM from "react-dom/client"
import "./index.css";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
const root = ReactDOM.createRoot(document.getElementById("root"))
function App() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    default:
      return <h1>404 Page Not Found</h1>;
  }
}
root.render(<App/>)