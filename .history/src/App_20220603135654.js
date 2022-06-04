import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="container">
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
