import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { NavMenu } from "./components/NavMenu";
import { CardsPage } from "./pages/CardsPage";
import { CheckPage } from "./pages/CheckPage";
import { TransactionPage } from "./pages/TransactionsPage";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavMenu />
        <div className="container">
          <Routes>
            <Route element={<CardsPage />} path="/" />
            <Route element={<CheckPage />} path="/checks" />
            <Route element={<TransactionPage />} path="/transactions" />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
