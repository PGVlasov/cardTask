import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { NavMenu } from "./components/NavMenu";
import { CardListPage } from "./pages/CardListPage";
import { RecieptPage } from "./pages/RecieptPage";
import { TransactionPage } from "./pages/TransactionsPage";
import { CardPage } from "./pages/CardPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavMenu />
        <div className="container">
          <Routes>
            <Route element={<CardListPage />} path="/" />
            <Route element={<CardPage />} path="/cardPage/:id" />
            <Route
              element={<RecieptPage />}
              path="/reciepts/:cardId/reciepts"
            />
            <Route element={<TransactionPage />} path="/transactions" />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
