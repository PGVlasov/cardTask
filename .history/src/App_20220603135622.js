import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="container">
        <h1>Cards App</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
