import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/Routes";
import { RouterProvider } from "react-router-dom";

//!New React Router

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
